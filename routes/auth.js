const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.get('/login', (req, res, next) => {
    const userInfo = req.body

    User.findOne({
        email: userInfo.email
    })

        .then(dbUser => {
            if (!dbUser) {
                return res.json({
                    message: "Invalid Email or Password"
                })
            }
            bcrypt.compareSync(userInfo.password, dbUser.password)
            .then(correct => {
                if(correct) {
                    const payload = {
                        id: dbUser._id,
                        email: dbUser.email
                    }
                    jwt.sign(
                        payload,
                        process.env.JWT_SECRET,
                        {
                            expiresIn: 86400
                        },
                        (err, token)=> {
                            if(err) return res.json({message: err})
                            return res.json({
                                message:"Success",
                                token: `Bearer + ${token}`
                            })
                        }
                    )
                }
                else {
                    return res.json({
                        message: "Invalid Username or Password"
                    })
                }
            })
            .catch(next)
        })
})
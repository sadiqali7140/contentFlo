const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()

router.post('/login', async (req, res, next) => {
    const userInfo = req.body
    // console.log(userInfo.email)

    User.findOne({
        email: userInfo.email,
    })

        .then(dbUser => {
            // console.log(dbUser)
            if (!dbUser) {
                return res.json({
                    message: "Invalid Email or Password"
                })
            }
            bcrypt.compare(userInfo.password, dbUser.password)
            .then(correct => {
                // console.log(correct)
                if(correct) {
                    const payload = {
                        // password: dbUser.password,
                        _id: dbUser._id,
                        email: dbUser.email
                    }
                    console.log(payload)
                    console.log(process.env.JWT_SECRET)
                    var token = jwt.sign(
                        payload,
                        process.env.JWT_SECRET,
                        {
                            expiresIn: 86400
                        })
                        res.json({
                            message:"Success",
                            token: `Bearer + ${token}`
                        })       
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

module.exports = router
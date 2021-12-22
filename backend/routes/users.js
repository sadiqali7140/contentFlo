const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/** GET /users
 * GET /users/email
 * POST /users
 * DELETE /users
 **/


// Users
router.get('/', (req, res, next) => {
    const token = req.headers['x-access-token']
    if(!token) return res.json({
        message: "Token Not Found"
    })
    else {
        jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
            if(err) return res.json({
                message: "Token Authentication Failed"
            })
            else {
                User.find().all()
                    .then((data) => res.json(data))
                    .catch(next);
            }
        })

    }

})

// User by email
router.get('/:email', (req, res, next) => {
     //const email = req.body.email;
     //console.log(email)

    const token = req.headers['x-access-token']
    if(!token) return res.json({
        message: "Token Not Found"
    })
    else {
        User.findOne({
            email: req.params.email
        })
        .then((results) => res.json({
            data: {
                _id: results._id,
                first_name: results.first_name,
                last_name: results.last_name,
                email: results.email,
                role: results.role
            }
        }))
        .catch(next);
    }
})

router.post('/', async (req, res, next) => {
    const userPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        first_name: req.body.first_name.toLowerCase(),
        last_name: req.body.last_name.toLowerCase(),
        email: req.body.email.toLowerCase(),
        password: userPassword,
        role: req.body.role,
    });

    res.set('Content-Type', 'application/json');

    user.save()
        .then(results => {
            console.log(results)
            res.send({
                data: {
                    _id: results._id,
                    first_name: results.first_name,
                    last_name: results.last_name,
                    email: results.email,
                    role: results.role
                }
            })
        })
        .catch((err) => {
            console.log(err)
            res.send({
                error: err
            })
        })
})

// Delete user by _id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    User.deleteOne({
        _id: id
    })
        .then((results) => res.json({
            data: {
                message: `Successfully yeeted ${id}`
            }
        }))
        .catch(next);
})

module.exports = router
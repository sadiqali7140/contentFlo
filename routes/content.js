const express = require('express');
const router = express.Router();
const Content = require('../models/content');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// GET /users
// GET /users/email
// POST /users
// DELETE /users


// Content
router.get('/', (req, res, next) => {

    Content.find().all()
        .then((data) => res.json(data))
        .catch(next);
});

// [WIP] Content by _id
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    Content.findOne({
        id: id
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
});

// Add content by _id
router.post('/:id', async (req, res, next) => {
    const userPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        first_name: req.body.first_name.toLowerCase(),
        last_name: req.body.last_name.toLowerCase(),
        email: req.body.email.toLowerCase(),
        password: userPassword,
        role: 'client',
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
});

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
});

module.exports = router
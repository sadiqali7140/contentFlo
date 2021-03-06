const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Schema } = require('mongoose');

// GET /viewComment
// GET /addComment


router.get('/', (req, res, next) => {
    const token = req.headers['x-access-token']
    if(!token) return res.json({
        message: "Token Not Found"
    })
    else {
        jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
            if(err) return res.json({message: "Token Authentication Failed"
        })
        else {
            Comment.find({ author: req.body.author })
            .then((data) => res.json(data))
            .catch(next);
        }
    })
}
})
/*
router.post('/addComment', async (req, res, next) => {

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

            }
            )
        
        }
    }
)
*/

module.exports = router ;
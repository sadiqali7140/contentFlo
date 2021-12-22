const express = require('express');
const router = express.Router();
const Content = require('../models/content');
const User = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Schema } = require('mongoose');
const { findById } = require('../models/user');

// GET /users
// GET /users/email
// POST /users
// DELETE /users


// GET Content
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
                Content.find().all()
                .then((data) => res.json(data))
                .catch(next);
            }
        })
    }
})

// GET Content by content_id
router.get('/:id', (req, res, next) => {
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
                            
                const id = req.params.id
                Content.findOne({
                    id: id
                })
                    .then((results) => res.json({
                        data: {
                            image_url: results.image_url,
                            title: results.title,
                            description: results.description,
                            caption: results.caption,
                            approved: results.approved,
                            created_date: results.created_date,
                            upload_date:  results.upload_date
                        }
                    }))
                    .catch(next)
            }
        })
    }
})

// GET Content by client_id
router.get('/:client', (req, res, next) => {
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
                            
                const id = req.params.client
                Content.find({
                    client: {
                        type: Schema.Types.ObjectID,
                        ref: id
                    }
                })
                    .then((results) => res.json({
                        data: {
                            image_url: results.image_url,
                            title: results.title,
                            description: results.description,
                            caption: results.caption,
                            approved: results.approved,
                            created_date: results.created_date,
                            upload_date:  results.upload_date
                        }
                    }))
                    .catch(next)
            }
        })
    }
})

// ADD content by _id
router.post('/', async (req, res, next) => {
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
                
                const content = new Content({
                    client: req.body.client,
                    image_url: req.body.image_url.toLowerCase(),
                    title: req.body.title,
                    description: req.body.description,
                    caption: req.body.caption,
                    approved: false,
                    created_date: Date.now(),
                    upload_date: req.body.upload_date
                })

                res.set('Content-Type', 'application/json');

                content.save()
                .then(results => {
                    res.send({
                        data: {
                            client : results.client,
                            image_url: results.image_url,
                            title: results.title,
                            description: results.description,
                            caption: results.caption,
                            created_date: results.created_date,
                            upload_date: results.upload_date
                        }
                    })
                })
                .catch((err) => {
                    console.log(err)
                    res.send({
                        error: err
                    })
                })
            }
        })
    }
})

// Add comment in content
router.post('/addComment', async (req, res, nexxt) => {
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
                let doc= await Content.findOne(Content.ObjectID)
                doc.comment.push(
                    {
                        name : req.body.comment.name,
                        message : req.body.comment.message
                    }
                )
            console.log("pickME")
            return res.json(
                {
                    message: "comment successful"
                   }
            )
            }
            
        })
    }
})

// Delete content by _id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    Content.deleteOne({
        _id: id
    })
        .then((results) => res.json({
            data: {
                message: `Successfully yeeted ${id}`
            }
        }))
        .catch(next)
})

module.exports = router;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user') ;

const ContentSchema = new Schema({
    client: {
        type : Schema.Types.ObjectId, ref : 'User'
    }, 
    image_url: String,
    title: String,
    description: String,
    caption: String,
    approved: Boolean,
    created_date: String,
    upload_date: String,
    comment : [{
        name : {
            type : Schema.Types.ObjectId, ref : 'User'
        },
        message : String
    } ]
});

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;
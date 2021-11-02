const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    image_url: String,
    title: String,
    description: String,
    caption: String,
    approved: Boolean,
    created_date: Date,
    upload_date: Date,
});

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;
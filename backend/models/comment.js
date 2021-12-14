const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: Schema.Types.ObjectId,
        ref: 'Content'
    },
    text: String,
    date: Date,
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;

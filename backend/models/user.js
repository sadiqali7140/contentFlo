const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        // required: [true, 'my custom error message'],
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'client'],
        required: true,
    },
    client: [{ 
        type : Schema.Types.ObjectId,
        ref: 'Client'  
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
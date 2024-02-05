const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required: true,
        unique : true
    },
    password : {
        type : String,
        required: true
    },
    bio : {
        type : String,
    },
    tweets : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Tweet'
        }
    ],
})

module.exports = mongoose.model('User', userSchema);
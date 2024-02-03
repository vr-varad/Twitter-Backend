const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const tweetSchema = new Schema({
    content : {
        type : String,
    },
    likes : {
        type : Number,
        default : 0
    },
    retweets : {
        type : Number,
        default : 0
    },
    comments : {
        type : ObjectId,
    },
},{timestamps: true})

module.exports = mongoose.model('Tweet', tweetSchema);
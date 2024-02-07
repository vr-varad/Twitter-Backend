const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const tweetSchema = new Schema({
    content : {
        type : String,
    },
    likes : [{
        type : Schema.Types.ObjectId,
        ref: 'Like'
    }],
    retweets : {
        type : Number,
        default : 0
    },
    comments : {
        type : String,
    },
},{timestamps: true})

module.exports = mongoose.model('Tweet', tweetSchema);
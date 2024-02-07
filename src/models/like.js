const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    onModel : {
        type: String,
        required : true,
        enum : ['Tweet','Comment']
    },
    likeable : {
        type: mongoose.Schema.ObjectId,
        required : true,
        refPath : 'onModel'
    },

},{timestamps: true})  

module.exports = mongoose.model('Like',likeSchema)
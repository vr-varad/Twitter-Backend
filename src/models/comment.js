const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content : {
        type : String,
        required: true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required: true
    },
    onModel : {
        type: String,
        required : true,
        enum : ['Tweet','Comment']
    },
    commentable : {
        type: mongoose.Schema.ObjectId,
        required : true,
        refPath : 'onModel'
    }
},{timestamps: true})


module.exports = mongoose.model('Comment',commentSchema)
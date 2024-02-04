const mongoose = require('mongoose')
const {Schema} = mongoose;

const hashTagSchema = new Schema({
    text : {
        type: String,
        required : true,
        unique: true,
    },
    tweets : {
        type: Schema.Types.ObjectId
    }
},{
    timestamps: true
})

module.exports = mongoose.model('HashTags',hashTagSchema)
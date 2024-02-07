const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
    name : {
        type: String,

    }
})

userSchema.pre('save',function(next){
    const user = this;
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(user.password,salt);
    user.password=encryptedPassword ; 
    next()
})

module.exports = mongoose.model('User', userSchema);
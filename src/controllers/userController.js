const UserService =  require('../services/userService')
const bcrypt = require('bcrypt')

const userService = new UserService()


const signUp = async(req,res)=>{
    try {
        const user = await userService.createUser(req.body)
        return res.status(201).json({
            success: true,
            data: user,
            message: 'User created successfully',
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            message: 'User creation failed',
            err : error
        })
    }
}

const signIn = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const {user,token} = await userService.getByEmail(email)
        if(!user){
            return res.status(404).json({
                success: false,
                data: {},
                message: 'User not found',
                err : {}
            })
        }
        if(bcrypt.compareSync(password,user.password)){
            return res.status(200).json({
                success: true,
                data: user,
                message: 'User logged in successfully',
                token,
                err : {}
            })
        }else{
            return res.status(401).json({
                success: false,
                data: {},
                message: 'User login failed( Wrong Credentials. . )',
                err : {}
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            message: 'User login failed',
            err : error
        })
    }
}
module.exports = {
    signUp,signIn
 }
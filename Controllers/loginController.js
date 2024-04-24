const User=require('../Models/userModel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
require('dotenv').config()






const handleLogin=async(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
     return res.status(400).json({'status':'error',
     'message':'user and password are required'
    })
    }
    const foundUser=await User.findOne({email:req.body.email})
    if(!foundUser)
    return res.status(401).json({
     'status':'error',
     'message':'this user is not authorized'
 })
 //evaluate password
 const match=await bcrypt.compare(password,foundUser.password)
 if(!match)
 return res.sendStatus(401)
 else{
    //jwt
    const accessToken=jwt.sign(
        {'email':foundUser.email},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:'30s'}
    )
    const refreshToken=jwt.sign(
        {'email':foundUser.email},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:'2d'}

        
    )
     res.status(200).json({
         'success':'logged in'
 })
 }
 }

 module.exports={
    handleLogin
 }
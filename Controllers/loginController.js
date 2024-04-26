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
    
    const Token=jwt.sign(
        {'email':foundUser.email},
        process.env.TOKEN_SECRET
    )
    res.cookie('jwt', Token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
     res.status(200).json({
         foundUser
 })
 
 }
 }

 const handleLogout=async(req,res)=>{
try{
    res.clearCookie('jwt', { httpOnly: true });
    res.status(200).json('done successfully')
}catch(error){
res.status(500).json({
    message:error.message
})
}
    
 }

 module.exports={
    handleLogin,
    handleLogout
 }
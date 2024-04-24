const express=require('express')
const router=express.Router()
const User=require('../Models/userModel')

const{
    handleLogin
}=require('../Controllers/loginController')

router.post('/login',handleLogin)


module.exports=router
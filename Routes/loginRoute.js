const express=require('express')
const router=express.Router()
const verifyJWT=require('../Middlewares/verifyJWT')
const{
    handleLogin,
    handleLogout
}=require('../Controllers/loginController')

router.post('/login',handleLogin)
router.get('/logout',verifyJWT,handleLogout)


module.exports=router
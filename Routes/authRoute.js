const express=require('express')
const router=express.Router()
const User=require('../Models/userModel')

const {
    postDoctor,
    postPatient
}=require('../Controllers/authController')



router.post('/postDoctor',postDoctor)
router.post('/postPatient', postPatient)



module.exports=router
const express=require('express')
const router=express.Router()
const User=require('../Models/userModel')

const {
    
    getDoctors,
    deleteUser,
    editDoctor,
    deleteUsers,
    getDoctorInfo,
    postDoctor

}=require('../Controllers/doctorController')



router.get('/getDoctors',getDoctors)
router.delete('/deleteUser/:id',deleteUser)
router.put('/editDoctor/:id',editDoctor)
router.delete('/deleteUsers',deleteUsers)
router.get('/doctorInfo/:doctorId',getDoctorInfo)



module.exports=router
const express=require('express')
const router=express.Router()
const User=require('../Models/userModel')

const {
    postDoctor,
    getDoctors,
    deleteUser,
    editDoctor,
    deleteUsers,
    getDoctorInfo
}=require('../Controllers/doctorController')


router.post('/postDoctor',postDoctor)
router.get('/getDoctors',getDoctors)
router.delete('/deleteDoctor/:id',deleteUser)
router.put('/editDoctor/:id',editDoctor)
router.delete('/deleteUsers',deleteUsers)
router.get('/doctorInfo/:doctorId',getDoctorInfo)



module.exports=router
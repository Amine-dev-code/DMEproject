const express=require('express')
const router=express.Router()
const User=require('../Models/userModel')


const {
    editPatient,
    ownPatients,
    getPatientInfo,
    getPatients
    
}=require('../Controllers/patientController')



router.put('/editPatient/:id', editPatient)
router.get('/getOwnPatients/:doctorId', ownPatients)
router.get('/doctorInfo/:patientId',getPatientInfo)
router.get('/getPatients',getPatients)



module.exports=router;
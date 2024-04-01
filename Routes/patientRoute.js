const express=require('express')
const router=express.Router()
const User=require('../Models/userModel')


const {
    postPatient,
    editPatient,
    ownPatients,
    getPatientInfo
    
}=require('../Controllers/patientController')


router.post('/postPatient', postPatient)
router.put('/editPatient/:id', editPatient)
router.get('/getOwnPatients/:doctorId', ownPatients)
router.get('/doctorInfo/:patientId',getPatientInfo)


module.exports=router;
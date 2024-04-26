const express=require('express')
const router=express.Router()
const User=require('../Models/userModel')
const verifyJWT=require('../Middlewares/verifyJWT')


const {
    editPatient,
    ownPatients,
    getPatientInfo,
    getPatients,
    postPatient
    
}=require('../Controllers/patientController')


router.post('/postPatient', postPatient)
router.put('/editPatient/:id', editPatient)
router.get('/getOwnPatients/:doctorId', ownPatients)
router.get('/patientInfo/:patientId',getPatientInfo)
router.get('/getPatients',getPatients)



module.exports=router;
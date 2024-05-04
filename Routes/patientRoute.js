const express=require('express')
const router=express.Router()
const User=require('../Models/userModel')
const verifyJWT=require('../Middlewares/verifyJWT')


const {
    editPatient,
    ownPatients,
    getPatientInfo,
    getPatients,
    postPatient,
    deletePatient
    
}=require('../Controllers/patientController')



router.put('/editPatient/:id', editPatient)
router.get('/getOwnPatients/:doctorId', ownPatients)
router.get('/patientInfo/:patientId',getPatientInfo)
router.get('/getPatients',getPatients)
router.delete('/deleteOwnPatient/:patientId/:doctorId',deletePatient)



module.exports=router;
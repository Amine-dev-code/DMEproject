const express=require('express')
const router=express.Router()
const User=require('../Models/userModel')
const verifyJWT=require('../Middlewares/verifyJWT')


const {
    editPatient,
    ownPatients,
    getPatientInfo,
    getPatients,
    deletePatient,
    addToOwnPatient
    
}=require('../Controllers/patientController')



router.put('/editPatient/:id', editPatient)
router.get('/getOwnPatients/:doctorId', ownPatients)
router.get('/patientInfo/:patientId',getPatientInfo)
router.get('/getPatients',getPatients)//wasn't used in the project
router.delete('/deleteOwnPatient/:patientId/:doctorId',deletePatient)
router.put('/addToOwnPatient/:doctorId/:patientId',addToOwnPatient)



module.exports=router;
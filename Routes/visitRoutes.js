const express=require('express')
const router=express.Router()
const User=require('../Models/userModel')

const {
    addVisit,
    editVisit,
    getSpecificVisit,
    getVisits,
    deleteVisit,
    deleteAllvisits,
    getVisitsPatient,
    doctorVisits,
    clientDoctorVisits
}=require('../Controllers/visitController')


router.post('/postVisit/:patientId/:doctorId',addVisit)//done classe
router.put('/editVisit/:id',editVisit)//
router.get('/visit/:id',getSpecificVisit)//wasnt used
//router.delete('/deleteVisit/:id',deleteVisit)wasnt used
router.get('/getVisits',getVisits)//wasnt used
router.delete('/deleteAllvisits',deleteAllvisits)//wasnt used
router.get('/getVisitsPatient/:patientId',getVisitsPatient)//wasnt used
router.get('/doctorVisits/:doctorId',doctorVisits)//not used
router.get('/clientDoctorVisits/:patientId/:doctorId',clientDoctorVisits)



module.exports=router
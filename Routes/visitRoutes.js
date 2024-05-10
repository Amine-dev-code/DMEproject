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
    collectioDrop,
    doctorVisits,
    clientDoctorVisits
}=require('../Controllers/visitController')


router.post('/postVisit/:patientId/:doctorId',addVisit)
router.put('/editVisit/:id',editVisit)
router.get('/visit/:id',getSpecificVisit)
router.delete('/deleteVisit/:id',deleteVisit)
router.get('/getVisits',getVisits)
router.delete('/deleteAllvisits',deleteAllvisits)
router.get('/getVisitsPatient/:patientId',getVisitsPatient)
router.get('/doctorVisits/:doctorId',doctorVisits)//not used
router.get('/clientDoctorVisits/:patientId/:doctorId',clientDoctorVisits)
//router.delete('/dropVisitCollection',collectioDrop)


module.exports=router
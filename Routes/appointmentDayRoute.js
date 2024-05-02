const express=require('express')
const router=express.Router()


const{
    checkDisponibleAppointment
}=require('../Controllers/appointmentDayController')


router.post('/checkDisponibleAppointment/:doctorId',checkDisponibleAppointment)

module.exports=router
const express=require('express')
const router=express.Router()


const{
    checkDisponibleAppointment,
    getAppointmentDays
}=require('../Controllers/appointmentDayController')

router.get('/AppointmentDays',getAppointmentDays)

module.exports=router
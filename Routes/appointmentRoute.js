const express=require('express')
const router=express.Router()


const{
    PostAppointment,
    deleteAppointment,
    getAppointmentsDoctor,
    getAppointmentsPatient,
    getUpcomingAppointments,
    AskForAppointment,
    changeStatusAppointment
}=require('../Controllers/appointmentController')

router.post('/postVisit/:patientId/:doctorId',PostAppointment)
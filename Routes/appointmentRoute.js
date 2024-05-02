const express=require('express')
const router=express.Router()


const{
    PostAppointment,
    deleteAppointment,
    getAppointmentsDoctor,
    getAppointmentsPatient,
    getUpcomingAppointments,
    changeStatusAppointment,
    
}=require('../Controllers/appointmentController')

//router.post('/postVisit/:patientId/:doctorId',PostAppointment)
router.get('/getAppointment/:doctorId',getAppointmentsDoctor)
router.post('/postAppointment/:doctorId',PostAppointment)



module.exports=router
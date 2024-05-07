const express=require('express')
const router=express.Router()


const{
    PostAppointment,
    deleteAppointment,
    getAppointmentsDoctor,
    getAppointmentsPatient,
    getUpcomingAppointments,
    changeStatusAppointment,
    checkExisitingPattient
    
}=require('../Controllers/appointmentController')

//router.post('/postVisit/:patientId/:doctorId',PostAppointment)
router.get('/getAppointment/:doctorId',getAppointmentsDoctor)
router.post('/postAppointment/:doctorId',PostAppointment)
router.get('/checkExistingPatient/:email/:doctorId',checkExisitingPattient)
router.put('/changeStatusAppointment/:appointmentId',changeStatusAppointment)
router.get('/getAppointmentsPatient/:patientId',getAppointmentsPatient)
router.delete('/deleteAppointment/:appointmentId/:doctorId',deleteAppointment)




module.exports=router
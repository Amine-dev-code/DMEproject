// 
const Appointment=require('../Models/appointmentModel.js')
const AppointmentDay=require('../Models/appointmentDayModel.js')
const User=require('../Models/userModel.js')




const PostAppointment=async(req,res)=>{
    try{
        const doctorId=req.params;
        const testDate=req.body.reservation_date;
        const appointmentDay =await AppointmentDay.find({doctor:doctorId,treatment_day:testDate})
        if(!appointmentDay || appointmentDay.status==false){
            const newAppointment = new Appointment(req.body);
            newAppointment.patient=patientId;
            newAppointment.doctor=doctorId;
            newAppointment.status=false
            newAppointment.save()
            const doctor=await User.findById(doctorId)
            appointmentDay.reserved_patients++
            if(appointmentDay.reserved_patients==doctor.doctor_profile.maxPatient){
                appointmentDay.status=true
                appointmentDay.save()
            }
            res.status(200).json({
                message:'your appointment is succesfully tooken'
            })
        }
        else{
            res.status(200).json({
                status:'fail',
                message:'you cannot book an appointment this day'
            })
        }
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

const deleteAppointment=async(req,res)=>{
    try{
        const {id}=req.params
        const deletedAppointment=await Appointment.findByIdAndDelete(id)
        res.status(200).json(deletedAppointment)
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

const getAppointmentsPatient=async(req,res)=>{
    try{
        const {patientId}=req.params
        const Appointments=await Appointment.find({patient:patientId,status:false})
        res.status(200).json(Appointments)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
const getAppointmentsDoctor=async(req,res)=>{
    try{
        
        const {doctorId}=req.params
        const Appointments=await Appointment.find({doctor:doctorId,status:false})
        res.status(200).json(Appointments)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
const getUpcomingAppointments=async(req,res)=>{
    try{
        const {patientId}=req.params
        const {doctorId}=req.params
        const Appointments=await Appointment.find({patient:patientId,doctor:doctorId,status:false})
        res.status(200).json(Appointments)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

const changeStatusAppointment=async(req,res)=>{
    try{
        const {appointmentId}=req.params
        const Appointment=await Appointment.findById(appointmentId)
        Appointment.status=!Appointment.status;
        Appointment.save()
        res.status(200).json({
            status:'success',
        })
    }catch(error){
        res.status(500).json({status:'fail'})
    }
}
module.exports={
    PostAppointment,
    deleteAppointment,
    getAppointmentsDoctor,
    getAppointmentsPatient,
    getUpcomingAppointments,
    changeStatusAppointment,
}
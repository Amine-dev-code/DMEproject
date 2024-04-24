// 
const Appointment=require('../Models/appointmentModel.js')




const PostAppointment=async(req,res)=>{
    try{
        const newAppointment = new Appointment(req.body);
        newAppointment.status=false
        res.status(200).json(newAppointment)
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
        const Appointments=await Appointment.find({patient:patientId})
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
        const Appointments=await Appointment.find({doctor:doctorId})
        res.status(200).json(Appointments)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports={
    PostAppointment,
    deleteAppointment,
    getAppointmentsDoctor,
    getAppointmentsPatient
}

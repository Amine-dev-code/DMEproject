// 
const Appointment=require('../Models/appointmentModel.js')
const AppointmentDay=require('../Models/appointmentDayModel.js')
const User=require('../Models/userModel.js')




const PostAppointment=async(req,res)=>{
    try{
        const {doctorId}=req.params;
        const {patientId}=req.params;
        const testDate=req.body.visit_date;
        const appointmentDay =await AppointmentDay.findOne({doctor:doctorId,treatment_day:testDate})
        console.log(appointmentDay)
        if(!appointmentDay || appointmentDay.status==false){
            const newAppointment = new Appointment(req.body);
            newAppointment.patient=patientId;
            newAppointment.doctor=doctorId;
            newAppointment.status=false
            newAppointment.save();
            if(appointmentDay==null){
                const appointmenteDay= new AppointmentDay()
                appointmenteDay.treatment_day=req.body.visit_date;
                appointmenteDay.doctor=doctorId;
                appointmenteDay.status=false
                appointmenteDay.reserved_patients++
                await appointmenteDay.save()
             }
             else{
                appointmentDay.reserved_patients++;
                const doctor=await User.findById(doctorId);
                console.log(doctor.doctor_profile.maxPatient)
                if(appointmentDay.reserved_patients==doctor.doctor_profile.maxPatient){
                    appointmentDay.status=true
                    
                }
                await appointmentDay.save()
             }
            
            res.status(200).json({
                message:'your appointment is succesfully taken'
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
const checkExisitingPattient=async(req,res)=>{
    try{
        const {email}=req.params
        const {doctorId}=req.params

        const Userappointment =await User.findOne({role:'patient',email:email},{ doctor_profile: 0, password: 0,createdAt:0,updatedAt:0 })
        const doctor=await User.findById(doctorId)
        if(!Userappointment){
            res.status(200).json({
                status:'fail'
            })
        }
        else if (doctor.doctor_profile.ownPatients.includes(Userappointment._id)){
            res.status(200).json({
                status:'success',
                action:'nothing',
                info:Userappointment
            })
        }
        else{
            doctor.doctor_profile.ownPatients.push(Userappointment._id)
            await doctor.save();
            res.status(200).json({
                status:'success',
                action:'getIt',
                info:Userappointment
        })
    }}catch(error){
        res.status(500).json({
            status:'fail',
            message:error.message
        })
    }
}
module.exports={
    PostAppointment,
    deleteAppointment,
    getAppointmentsDoctor,
    getAppointmentsPatient,
    getUpcomingAppointments,
    changeStatusAppointment,
    checkExisitingPattient
    
}

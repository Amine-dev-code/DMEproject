
const Appointment=require('../Models/appointmentModel.js')
const AppointmentDay=require('../Models/appointmentDayModel.js')



const checkDisponibleAppointment=async(req,res)=>{
    try{
        const doctorId=req.params;
        const testDate=req.body.reservation_date;
        const appointmentDay =await AppointmentDay.find({doctor:doctorId,treatment_day:testDate})
        if(!appointmentDay){
           res.status(200).json({
            status:'success',
            message:'you can book an appointment this day'
           })
        }
        else{
            if(appointmentDay.status==false){
                res.status(200).json({
                    status:'success',
                    message:'you can book an appointment this day'
                })
            } else{
                res.status(200).json({
                    status:'fail',
                    message:'you cannot book an appointment this day'
                })
            }
        }
        
    }catch(error){
    res.status(500).json({
        message:error.message
    })
    }
    }
    const getAppointmentDays=async(req,res)=>{
        try{
            const AppointmentDays=await AppointmentDay.find({})
            res.status(200).json(AppointmentDays)
        }catch(error){
            res.status(500).json(error)
        }
    }

    module.exports={
        checkDisponibleAppointment,
        getAppointmentDays
    }
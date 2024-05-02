
const Appointment=require('../Models/appointmentModel.js')
const AppointmentDay=require('../Models/appointmentDayModel.js')



const checkDisponibleAppointment=async(req,res)=>{
    try{
        const {doctorId}=req.params;
        const testDate=req.body.visit_date;
        const appointmentDay =await AppointmentDay.findOne({doctor:doctorId,treatment_day:testDate})
        console.log(appointmentDay)
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
    

    module.exports={
        checkDisponibleAppointment
    }
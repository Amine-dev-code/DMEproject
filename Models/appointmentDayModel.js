const mongoose=require('mongoose')
const User=require('./userModel')

const appointmentDaySchema=mongoose.Schema({
    doctor:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    treatment_day:{
        type:Date
    },
    status:{
        type:Boolean
    }

}
)
const AppointmentDay=mongoose.model('AppointmentDay',appointmentDaySchema);

module.exports=AppointmentDay;
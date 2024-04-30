const mongoose=require('mongoose')
const User=require('./userModel')
const { ObjectId } = require('mongodb');

const appointmentSchema=mongoose.Schema({
    patient:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    doctor:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    full_name:
    {
        type:String,
        required:true
    },
    reservation_date:{
        type:Date,
        immutable:true,
        default:()=>Date.now()
    },
    visit_date:{
        type:Date,
    },
    status:{
        type:Boolean
    }
},
)
const Appointment=mongoose.model('Appointment',appointmentSchema);

module.exports=Appointment;
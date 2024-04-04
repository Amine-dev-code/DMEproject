const mongoose=require('mongoose')
const User=require('./userModel')
const { ObjectId } = require('mongodb');

const visitSchema=mongoose.Schema({
    patient:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    doctor:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    rapport:{
        type:String,
        required:true
    },
    diagnosis:{
        type:String,
        required:true
    },
    prescription:{
        type:String,
        required:true
    },
    files:[
        {
           docType:String,
           fieldname: String,
           originalname: String,
           encoding: String,
           mimetype: String,
           destination: String,
           filename: String,
           path: String,
           size: Number,
        }
    ]
},
{
    timestamps:true
})
const Visit=mongoose.model('Visit',visitSchema);

module.exports=Visit;
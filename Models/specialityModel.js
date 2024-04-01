const mongoose=require('mongoose')
const { ObjectId } = require('mongodb');

const specialitySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

const speciality=mongoose.model('Speciality',specialitySchema);

module.exports=Speciality;
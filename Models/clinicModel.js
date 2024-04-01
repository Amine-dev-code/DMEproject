const { ObjectId } = require('mongodb');
const mongoose=require('mongoose')


const clinicSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})
const Clinic=mongoose.model('Clinic',clinicSchema);

module.exports=Clinic;
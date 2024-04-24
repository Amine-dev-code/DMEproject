const User=require('../Models/userModel');

const fsPromises=require('fs').promises
const path=require('path');
const bcrypt=require('bcrypt');



const postDoctor=async(req,res)=>{
    try{
        const {password}=req.body;
        const hashedPassword=await bcrypt.hash(password,10)
        const doctor = new User({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            password:hashedPassword,
            doctor_profile:req.body.doctor_profile
        });
        doctor.role='doctor'
        await doctor.save();
        res.status(200).json(doctor)
        console.log(doctor);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
const postPatient=async(req,res)=>{
    try{
        const {password}=req.body;
        const hashedPassword=await bcrypt.hash(password,10)
        const patient = new User({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            password:hashedPassword,
            patient_profile:req.body.doctor_profile
        });
        patient.role='patient'
        await patient.save();
        res.status(200).json(patient)
        console.log(patient);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}



module.exports={
    postDoctor,
    postPatient,
}
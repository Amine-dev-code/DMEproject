const User=require('../Models/userModel');
//const { param } = require('../Routes/userRoutes');

const postDoctor=async(req,res)=>{
    try{
        const doctor = new User(req.body);
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
const getDoctors=async(req,res)=>{
    try{
        const doctors=await User.find({role:'doctor'})
        res.status(200).json(doctors)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
const deleteUser=async(req,res)=>{
    try{
        const{id}=req.params
        const deletedUser=await User.findByIdAndDelete(id)
        res.status(200).json(deletedUser)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
const editDoctor=async(req,res)=>{
    try{
        const{id}=req.params;
        const testuser=await User.findById(id)
        if(testuser.role=='doctor'){
        const doctor=await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(doctor)
        }
        else{
            res.status(200).json({message:'this is not a doctor'})
        }
        
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }

}
const deleteUsers=async(req,res)=>{
    try{
        await User.deleteMany()
        res.status(200).json('deleted')
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
const getDoctorInfo=async(req,res)=>{
    try{
        const {doctorId}=req.params
        const infos=await User.findById({doctorId},{patient_profile:0},{pasword:0})
        res.status(200).json({infos})
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
module.exports={
    postDoctor,
    getDoctors,
    deleteUser,
    editDoctor,
    deleteUsers,
    getDoctorInfo
}
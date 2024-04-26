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
        if (!isValidObjectId(patientId)) {
            return res.status(400).json({ message: "Invalid patient ID" });
        }
        const infos=await User.findById(doctorId,{patient_profile:0,password:0})
        if(!infos){
            res.status(404).json({message:'patient not found'})
        }
        res.status(200).json({infos})
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
const searchDoctors=async(req,res)=>{
    //this function is gonna be filtering doctors based on :
    //price
    //speciality
    //
    try{
        const price=req.query.price
        const speciality=req.query.speciality

        if(price!=undefined && speciality!=undefined){
            const filteredDoctors=await User.find({role:'doctor',"doctor_profile.price":price,'doctor_profile.speciality':speciality})
        }
        else if(price==undefined && speciality!=undefined){
            const filteredDocotors=await User.find({role:'doctor','doctor_profile.speciality':speciality})
        }
        else if(price!=undefined && speciality==undefined){
            const filteredDocotors=await User.find({role:'doctor',"doctor_profile.price":price})
        }
        else{
             const filteredDocotors=await User.find({role:'doctor'})
        }
        res.status(200).json({
            filteredDocotors
        })

    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
module.exports={
    
    getDoctors,
    deleteUser,
    editDoctor,
    deleteUsers,
    getDoctorInfo,
    searchDoctors,
    postDoctor
}
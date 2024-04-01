const User=require('../Models/userModel');
const Visit=require('../Models/visitModel')

const postPatient=async(req,res)=>{
    try{
        const patient = new User(req.body);
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


const editPatient=async(req,res)=>{
    try{
        const{id}=req.params;
        const testuser=await User.findById(id)
        if(testuser.role=='patient'){
        const patient=await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(patient)
        }
        else{
            res.status(200).json({message:'this is not a patient'})
        }
        
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }

}
const ownPatients=async(req,res)=>{
try{
const {doctorId}=req.params
const Patients=await Visit.find({doctor:doctorId},{patient:1}).populate('patient')
res.status(200).json(Patients)
}catch(error){
    res.status(500).json({
        message:error.message
    })
}
}
const getPatientInfo=async(req,res)=>{
    try{
        const {patientId}=req.params
        const infos=await User.findById({patientId},{doctor_profile:0},{password:0})
        res.status(200).json({infos})
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports={
    postPatient,
    editPatient,
    ownPatients,
    getPatientInfo
    
}
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
        if (!isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        const testuser=await User.findById(id)
        if(!testuser){
            return res.status(404).json({messae:'user not found'})
        }
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
if (!isValidObjectId(doctorId)) {
    return res.status(400).json({ message: "Invalid patient ID" });
}
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
        if (!isValidObjectId(patientId)) {
            return res.status(400).json({ message: "Invalid patient ID" });
        }
        const infos=await User.findById(patientId,{doctor_profile:0,password:0})
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
const getPatients=async(req,res)=>{
    try{
        const patients=await User.find({role:'patient'})
        res.status(200).json(patients)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
const searchPatient=async(req,res)=>{
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



}

module.exports={
    editPatient,
    ownPatients,
    getPatientInfo,
    getPatients,
    postPatient
    
}
const User=require('../Models/userModel');
const Visit=require('../Models/visitModel')




const editPatient=async(req,res)=>{
    try{
        const{id}=req.params;
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
const doctor = await User.findById(doctorId,{ownPatients:1}).populate({
    path: 'doctor_profile.ownPatients',
    model: 'User' // Assuming 'User' is the model name for patients
});
const ownPatients=doctor.doctor_profile.ownPatients
res.status(200).json(ownPatients);
}catch(error){
    res.status(500).json({
        message:error.message
    })
}
}
const getPatientInfo=async(req,res)=>{
    try{
        const {patientId}=req.params
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
const deletePatient=async(req,res)=>{
    try{
        const {doctorId}=req.params
        const {patientId}=req.params
        const doctor=await User.findById(doctorId)
        const indexToremove=doctor.doctor_profile.ownPatients.indexOf(patientId)
        if(indexToremove!==-1){
            doctor.doctor_profile.ownPatients.splice(indexToremove,1)
            await doctor.save()
            res.status(200).json({
                'status':'success',
            })
        }else{
            res.status(200).json({
                'status':'fail',
            })
        }
    }catch(error){
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
    deletePatient
    
}
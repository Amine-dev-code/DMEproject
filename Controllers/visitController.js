const User=require('../Models/userModel');
const Visit=require('../Models/visitModel');

const addVisit=async(req,res)=>{
try{
    const visit = new Visit(req.body);
        const patientid=req.params.patientId 
        const doctorid=req.params.doctorId
        visit.patient=patientid
        visit.doctor=doctorid
        await visit.save();
    res.status(200).json(visit)
    console.log(patientid)
}
catch(error){
    res.status(500).json({
        message:error.message
    })
}
}
const editVisit=async(req,res)=>{
try{
const {id}=req.params
const updatedvisit=await Visit.findByIdAndUpdate(id,req.body,{new:true})
res.status(200).json(updatedvisit)
console.log(updatedvisit)
}catch(error){
    res.status(500).json({
        message:error.message
    })
}

}
const getVisits=async(req,res)=>{
    try{
    const visits=await Visit.find({})
    res.status(200).json(visits)
    }
    catch(error){
    res.status(500).json({
    message:error.message
})
    } 
}
const getVisitsPatient=async(req,res)=>{
    try{
        const {patientId}=req.params
        const visits=await Visit.find({patient:patientId}).populate('patient').populate('doctor')
        res.status(200).json(visits)
        }
        catch(error){
        res.status(500).json({
        message:error.message
    })
        } 
}
const getSpecificVisit=async(req,res)=>{
try{
const {id}=req.params
const visit=await Visit.findById(id)
if(!visit){
    res.status(404).json('Visit Not Found')
}
else{
    res.status(200).json(visit)
}
}catch(error){
    res.status(500).json({
        message:error.message
    })
}


}

const deleteVisit=async(req,res)=>{
    try{
        const {id}=req.params
        const deletedVisit=await Visit.findByIdAndDelete(id)
        res.status(200).json(deletedVisit)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
const deleteAllvisits=async(req,res)=>{
    try{
        await Visit.deleteMany({})
        res.status(200).json('deleted')
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
    
}
const collectioDrop=async(req,res)=>{
    try{
        await Visit.collection.drop()
        res.status(200).json('droped')
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
const doctorVisits=async(req,res)=>{
    try{
    const {doctorId}=req.params
    const myVisits=await Visit.find({doctor:doctorId})
    res.status(200).json(myVisits)
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
const clientDoctorVisits=async(req,res)=>{
    try{
        const {doctorId}=req.params
        const {patientId}=req.params
        const myVisits=await Visit.find({doctor:doctorId,patient:patientId})
        res.status(200).json(myVisits)

    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
module.exports={
    addVisit,
    editVisit,
    getSpecificVisit,
    getVisits,
    deleteVisit,
    deleteAllvisits,
    getVisitsPatient,
    collectioDrop,
    doctorVisits,
    clientDoctorVisits
}
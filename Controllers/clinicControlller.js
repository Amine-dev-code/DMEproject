const Clinic=require('../Models/clinicModel.js')


const PostClinic=async(req,res)=>{
    try{
        const newClinic=await Clinic.create(req.body)
        res.status(200).json(newClinic)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

const deleteClinic=async(req,res)=>{
    try{
        const {id}=req.params
        const deletedClinic=await Clinic.findByIdAndDelete(id)
        res.status(200).json(deletedClinic)
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
const updateClinic=async(req,res)=>{
    try{
        const {id}=req.params
        const updatedClinic=await Clinic.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updatedClinic)
    }catch(error){
        res.status(500).json({
            message:error.message
        })

    }

}
const getClinics=async(req,res)=>{
    try{
        const clinics=await Clinic.find({})
        res.status(200).json(clinics)

    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports={
    PostClinic,
    deleteClinic,
    updateClinic,
    getClinics
}
const Speciality=require('../Models/specialityModel.js')


const PostSpeciality=async(req,res)=>{
    try{
        const newSpeciality=await Speciality.create(req.body)
        res.status(200).json(newSpeciality)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

const deleteSpeciality=async(req,res)=>{
    try{
        const {id}=req.params
        const deletedSpeciality=await Speciality.findByIdAndDelete(id)
        res.status(200).json(deletedSpeciality)
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
const updateSpeciality=async(req,res)=>{
    try{
        const {id}=req.params
        const updatedSpeciality=await Speciality.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updatedSpeciality)
    }catch(error){
        res.status(500).json({
            message:error.message
        })

    }

}
const getSpecialities=async(req,res)=>{
    try{
        const specialities=await Speciality.find({})
        res.status(200).json(specialities)

    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports={
    PostSpeciality,
    deleteSpeciality,
    updateSpeciality,
    getSpecialities
}
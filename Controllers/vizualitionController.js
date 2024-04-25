const User=require('../Models/userModel');
const Visit=require('../Models/visitModel');

const getMonthlyVisits=async(req,res)=>{
    try{
        const {doctorId}=req.params
        const currentDate=new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear=currentDate.getFullYear()
        const firstDay=new Date(currentYear,currentMonth,2)
        
        const visitsPeriod=await Visit.find({createdAt:{$gte:firstDay,$lte:currentDate},doctor:doctorId})
        res.send(visitsPeriod)

    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports={
    getMonthlyVisits
}
const User=require('../Models/userModel');
const Visit=require('../Models/visitModel');

const getMonthlyVisits=async(req,res)=>{
    try{
        const myMap = new Map();
        const {doctorId}=req.params
        const currentDate=new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear=currentDate.getFullYear()
        const firstDay=new Date(currentYear,currentMonth,2)
        
        const visitsPeriod=await Visit.find({createdAt:{$gte:firstDay,$lte:currentDate},doctor:doctorId})
        const neededDay = new Date(firstDay);
        while(neededDay!=currentDate){
        const result=await Visit.find({createdAt:neededDay,doctor:doctorId});
        myMap.set()
        neededDay.setDate(neededDay.getDate() + 1);
        }
        



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
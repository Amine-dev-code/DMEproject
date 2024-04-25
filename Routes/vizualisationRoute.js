const express=require('express')
const router=express.Router()
const Visits=require('../Models/clinicModel')


const {
    getMonthlyVisits
}=require('../Controllers/vizualitionController')

router.get('/monthlyVisits/:doctorId',getMonthlyVisits)

module.exports=router
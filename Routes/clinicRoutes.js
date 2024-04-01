const express=require('express')
const router=express.Router()
const Clinic=require('../Models/clinicModel')


const {
    PostClinic,
    deleteClinic,
    updateClinic,
    getClinics
}=require('../Controllers/clinicController.js')

router.get('/getaClinics',getClinics)
router.post('/postClinic',PostClinic)
router.put('/editClinic/:id',updateClinic)
router.delete('/deleteClinic/:id',deleteClinic)
const express=require('express')
const router=express.Router()
const Speciality=require('../Models/specialityModel.js')


const {
    PostSpeciality,
    deleteSpeciality,
    updateSpeciality,
    getSpecialities

}=require('../Controllers/specialityController.js')

router.get('/getSpecialities',getSpecialities)
router.post('/postSpeciality',PostSpeciality)
router.put('../editSpeciality/:id',updateSpeciality)
router.delete('/deleteSpeciality/:id',deleteSpeciality)
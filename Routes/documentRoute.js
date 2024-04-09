const express=require('express')
const router=express.Router()
const Visit=require('../Models/visitModel')



const {
    uploading,
    upload,
    getNotification
}=require('../Controllers/documentController')


router.post('/upload/:id', upload.single('avatar'),uploading );
router.get('/notificationDoc/:patientId',getNotification)


module.exports=router

const express=require('express')
const router=express.Router()
const Visit=require('../Models/visitModel')



const {
    uploading,
    upload,
    getNotification,
    findDocument,
    deleteDocument,
    countNotifications
}=require('../Controllers/documentController')


router.post('/upload/:id', upload.array('avatar', 13),uploading );
router.put('/notificationDoc/:patientId',getNotification)
router.get('/count/:patientId',countNotifications)
router.get('/document/:visitId/:docId',findDocument)
router.get('/deletedocument/:visitId/:docId',deleteDocument)

module.exports=router

const express=require('express')
const router=express.Router()
const Visit=require('../Models/visitModel')



const {
    uploading,
    upload,
    getNotification,
    findDocument,
    deleteDocument,
    countNotifications,
    uploadStatus
}=require('../Controllers/documentController')


router.post('/upload/:id', upload.array('avatar', 13),uploading );
router.get('/notificationDoc/:patientId',getNotification)
router.put('/uploadStatus/:patientId',uploadStatus)//
router.get('/count/:patientId',countNotifications)
router.get('/document/:visitId/:docId',findDocument)
router.get('/deletedocument/:visitId/:docId',deleteDocument)

module.exports=router

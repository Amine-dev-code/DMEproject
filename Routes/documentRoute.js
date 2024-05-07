const express=require('express')
const router=express.Router()
const Visit=require('../Models/visitModel')



const {
    uploading,
    upload,
    getNotification,
    findDocument,
    deleteDocument
}=require('../Controllers/documentController')


router.post('/upload/:id', upload.array('avatar', 13),uploading );
router.get('/notificationDoc/:patientId',getNotification)
router.get('/document/:visitId/:docId',findDocument)
router.get('/deletedocument/:visitId/:docId',deleteDocument)

module.exports=router

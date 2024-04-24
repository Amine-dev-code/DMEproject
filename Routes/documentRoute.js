const express=require('express')
const router=express.Router()
const Visit=require('../Models/visitModel')



const {
    uploading,
    upload,
    getNotification,
    findDocument,
   // deleteDocument
}=require('../Controllers/documentController')


router.post('/upload/:id', upload.single('avatar'),uploading );
router.get('/notificationDoc/:patientId',getNotification)
router.get('/document/:visitId/:docId',findDocument)
//router.put('/deletedocument/:visitId/:docId',deleteDocument)

module.exports=router

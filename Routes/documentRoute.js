const express=require('express')
const router=express.Router()
const Visit=require('../Models/visitModel')


const {
    uploading,
    upload
}=require('../Controllers/documentController')

router.post('/upload/:id', upload.single('avatar'),uploading );

module.exports=router

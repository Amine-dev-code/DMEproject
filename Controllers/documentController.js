const express = require('express');
const fs=require('fs');
const Uploadnotify=require('../Models/uploadNotify')
const multer = require('multer');
const {
notifyUserDoc
}=require('../Notifications/documentNotification')
const Visit=require('../Models/visitModel');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    if(file.mimetype=='image/jpeg'){
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname + '-' + uniqueSuffix+'.jpg')
    }
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname + '-' + uniqueSuffix)
   // cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage,
  createDestDir: true,
  fileFilter:function(req,file,cb){
    if(file.mimetype=='image/jpeg'||file.mimetype=='application/pdf'){
      cb(null,true)
    }
    else{
      cb('this is not image or pdf');
    }
  } })
// Define a route handler for handling file uploads


const uploading=async(req, res, next)=>{
    // req.file is the uploaded file (avatar)
    // req.body will hold any text fields from the form (if there were any)
    try{
    const {id}=req.params
    const newFile = {
        filename: req.file.filename,
        originalname: req.file.originalname,
        encoding: req.file.encoding,
        mimetype: req.file.mimetype,
        path: req.file.path,
        size: req.file.size
    };
    
    const visit=await Visit.findByIdAndUpdate(id,{new:true});
    visit.files.push(newFile);
    visit.save();
    console.log('uploaded');
    console.log(req.file);
    const idoctor=visit.doctor.toHexString()
    const ipatient=visit.patient.toHexString()
    notifyUserDoc.emit('uploadFile',idoctor,ipatient,visit._id)
    res.send('File uploaded successfully');
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
  }
  const getNotification=async(req,res)=>{
    try{
      const {patientId}=req.params
      const uploadDoc=await Uploadnotify.find({receiver:patientId,readingStatus:false})
      await Uploadnotify.updateMany({receiver:patientId,readingStatus:false},{$set:{readingStatus:true}})
      res.status(200).json(uploadDoc)
    }catch(error){
      res.status(500).json({
        message:error.message
      })
    }
  }
  const findDocument=async(req,res)=>{
    
      const {visitId}=req.params
      const {docId}=req.params
      const doc=await Visit.findOne(
        { _id: visitId, 'files._id': docId }, 
        { 'files.$': 1 }
      );
      console.log(doc)
  }
  //const deleteDocument=async(req,res)=>{
    //try{
     // const {visitId}=req.params
      //const {docId}=req.params
      //const doc=await Visit.findOne(
        //{ _id: visitId, 'files._id': docId }, 
        //{ 'files.$': 1 }
      //)
      
      //if(fs.existsSync('./uploads/TP4.pdf')){
       // fs.unlink('./uploads/TP4.pdf',async(err)=>{
          //try{
           
           //const UpdatedVisit= Visit.findByIdAndUpdate(visitId,{$pull:{files:{file_id:docId}}},{new:true})
          //console.log(UpdatedVisit)
          //}catch(error){
           // console.log(error)
          //}
          
        //})
   // }
   // else{
     // res.status(200).json('doesnt exist')
    //}
      
      
   // }
   // catch(error){
     // res.status(500).json({
      //  message:error.message
      //})
    //}
  //}
 
  
 

  module.exports={
    uploading,
    upload,
    getNotification,
    findDocument,
    //deleteDocument
  }
const express = require('express');
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
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage,
  createDestDir: true,
  fileFilter:function(req,file,cb){
    if(file.mimetype!=='image/jpeg'||file.mimetype!=='application/pdf'){
      cb(null,true)
    }
    else{
      cb(new Error('The file is not PDF or img'));
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
    console.log(req.body);
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
      res.status(200).json(uploadDoc)
    }catch(error){
      res.status(500).json({
        message:error.message
      })
    }
  }
 
  
 

  module.exports={
    uploading,
    upload,
    getNotification
  }
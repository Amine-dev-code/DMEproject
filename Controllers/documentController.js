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
    cb(null, 'DME/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix+'-'+file.originalname)
   // cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage,
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
    var originalnames=[]
  for(const file of req.files){
      const newFile = {
        filename: file.filename,
        originalname: file.originalname,
        encoding: file.encoding,
        mimetype: file.mimetype,
        path: file.path,
        size: file.size
    };
    originalnames.push(file.filename)
    //console.log(file.originalname)
    var visit=await Visit.findById(id);
    await visit.files.push(newFile);
    await visit.save();
    }
    console.log('uploaded');
    //console.log(req.files);
    const idoctor=visit.doctor.toHexString()
    const ipatient=visit.patient.toHexString()
    notifyUserDoc.emit('uploadFile',idoctor,ipatient,originalnames)
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
      //await Uploadnotify.updateMany({receiver:patientId,readingStatus:false},{$set:{readingStatus:true}},{New:1})
      res.status(200).json(uploadDoc)
    }catch(error){
      res.status(500).json({
        message:error.message
      })
    }
  }
  const uploadStatus=async(req,res)=>{
    try{
      const {patientId}=req.params
      await Uploadnotify.updateMany({receiver:patientId,readingStatus:false},{$set:{readingStatus:true}},{New:1})
    }catch(error){
      console.log(error)
    }
  }
  const countNotifications=async(req,res)=>{
    try{
      const {patientId}=req.params
      const count = await Uploadnotify.countDocuments({ receiver: patientId, readingStatus: false });
      res.status(200).json(count)
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
  const deleteDocument=async(req,res)=>{
    try{
      const {visitId}=req.params
      const {docId}=req.params
      const doc=await Visit.findById(visitId)
      const toSearchfiles=doc.files;
      for(let toSearchfile of toSearchfiles){
        if(toSearchfile._id==docId){
          const indexToremove=doc.files.indexOf(toSearchfile)
          doc.files.splice(indexToremove,1)
          var foundFileName=toSearchfile.filename
          break;
        }
      }
      await doc.save()
      console.log(foundFileName)
      if(fs.existsSync(`./DME/uploads/${foundFileName}`)){
        fs.unlink(`./DME/uploads/${foundFileName}`,async(err)=>{
          res.status(200).json({'status':'success',
        'message':'the file deleted successfully'})
        })
   }
   else{
     res.status(200).json('doesnt exist')
    }
      
      
    }
   catch(error){
     res.status(500).json({
       message:error.message
      })
    }
  }
 
  
 

  module.exports={
    uploading,
    upload,
    getNotification,
    findDocument,
    deleteDocument,
    countNotifications,
    uploadStatus
  }
const EventEmitter=require('events')
const UploadNotify=require('../Models/uploadNotify')
const notifyUserDoc=new EventEmitter()
notifyUserDoc.on('uploadFile',(expediteurRef,recepteurRef,fichierRef)=>{
 const uploadNotify=new UploadNotify({
    uploader:expediteurRef,
    receiver:recepteurRef,
    file:fichierRef,
    readingStatus:false
 }) 
 uploadNotify.save();
})

module.exports={
    notifyUserDoc
}

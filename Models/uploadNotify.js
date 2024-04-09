const { ObjectId } = require('mongodb');
const mongoose=require('mongoose')
const Visit=require('./visitModel')

const uploadNotifySchema=mongoose.Schema({
    
    uploader:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    file:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Visit"
    },
    receiver:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    readingStatus:{
        type:Boolean
    }
})

const UploadNotify=mongoose.model('UploadNotify',uploadNotifySchema);

module.exports=UploadNotify;
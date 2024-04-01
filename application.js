require('dotenv').config()
const express = require('express')
var cors = require('cors')
const app = express()
const mongoose=require('mongoose')
const doctorRoutes=require('./Routes/doctorRoutes.js')
const patientRoutes=require('./Routes/patientRoute.js')
const visitRoutes=require('./Routes/visitRoutes.js')
app.use(cors())//this is mandatory to let front connect into front
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//const {errorMiddleware}=require('./middleware/errorMiddleware.js')
app.use('/api',doctorRoutes,patientRoutes,visitRoutes)




const MONGO_URL=process.env.MONGO_URL
const port=process.env.PORT

mongoose.connect(MONGO_URL).then(()=>{
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}).catch((error)=>{
  console.log(error)
})
app.get('/',(req,res)=>{
  res.send('hello')
})
//app.use('/api',ProductRoutes)

//app.use(errorMiddleware);

//routes




////1GI8XhItu3LPpgy0
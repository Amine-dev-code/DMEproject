require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');


const doctorRoutes=require('./Routes/doctorRoutes.js')
const patientRoutes=require('./Routes/patientRoute.js')
const visitRoutes=require('./Routes/visitRoutes.js')
const documentRoutes=require('./Routes/documentRoute.js')
const authRoutes=require('./Routes/authRoute.js')
const loginRoute=require('./Routes/loginRoute.js')
const vizualisationRoute=require('./Routes/vizualisationRoute.js')
const appointment=require('./Routes/appointmentRoute.js')
const appointmentDay=require('./Routes/appointmentDayRoute.js')

const app = express();
app.use(cookieParser());
app.use(cors())//this is mandatory to let front connect into front
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//const {errorMiddleware}=require('./middleware/errorMiddleware.js')
app.use('/api',doctorRoutes,patientRoutes,visitRoutes,documentRoutes,authRoutes,loginRoute,vizualisationRoute,appointment,appointmentDay)




app.get('/', (req, res) => {
  res.send('hello');
});

// HTTP Server Creation
const server = http.createServer(app);

// Socket.IO Initialization
const io = new Server(server, {
  cors: {
  origin: '*'
    // Adjust this in production to restrict origins
  },
  
});
let users={};
// Socket.IO Events
io.on('connection', (socket) => {
  socket.on('registerUser', (userId) => {
    let check=false;
    let socketValue=null;
    for(let socketId in users){
      if(users[socketId]==userId){
        check=true;
       socketValue=socketId
      }  
    }
    if(check)
      users[socketValue]===userId
    else
    users[socket.id] = userId;
    console.log(users)
    console.log(`User ${userId} registered with socketId ${socket.id}`)
  });
 
  socket.on('notifyUser',(count,userId)=>{
    for(let socketId in users){
      if(users[socketId]===userId){
        console.log(count);
        io.to(socketId).emit('newEmit', { message: 'Hello, everyone except the sender!' });
        console.log(`User ${userId} registered hhh with socketId ${socketId}`);
        
      }
    }

  })
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    delete users[socket.id]
    console.log(users)
    
  });
  socket.on('deletekey',() => {
    delete users[socket.id]
    console.log(users)
  })
});

// MongoDB Connection and Server Start
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on http://0.0.0.0:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });



////1GI8XhItu3LPpgy0
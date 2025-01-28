import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { io } from 'socket.io-client';
import VueSocketIO from 'vue-3-socket.io';

// Initialize the Socket.IO client
const socket = io('http://127.0.0.1:3000',{
  reconnection: true
}); // Replace with your server URL


socket.on('connect', () => {
  console.log(`Connected with socket ID: ${socket.id}`);
  
  const userId = localStorage.getItem('id'); // Parse JSON if userId is an object stored as a string
  if (userId && userId.role === 'patient') {
    socket.emit('registerUser', userId);
    console.log(`User registered: ${userId}`);
  } else {
    console.log('User ID not found or user role is not patient.');
  }})




// Configure Vue-Socket.IO without Vuex
const vueSocketIO = new VueSocketIO({
  debug: true,
  connection: socket,
  vuex: false, // Custom socket.io instance
  // options: { path: '/my-app/' }, // Optional additional options
});

// Create the Vue application
const app = createApp(App);
app.provide('$socket', socket);

// Use the Vue-Socket.IO plugin
app.use(vueSocketIO);

// Use other plugins like the router
app.use(router);

// Mount the application
app.mount('#app'); 
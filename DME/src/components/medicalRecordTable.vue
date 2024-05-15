<template>
    <div class="appointments-container">
      <div class="table">
        <div class="table-header">
          <div class="header-cell">DOCOTR</div>
          <div class="header-cell">TITLE</div>
          <div class="header-cell">DATE</div>
        </div>
        <div
          v-for="appointment in appointments"
          :key="appointment.id"
          class="table-row"
          @click="change(appointment)"
        >
          <div class="table-cell" style="height: min-content">{{ appointment.doctor.first_name }} {{ appointment.doctor.last_name }}</div>
          <div class="table-cell">{{ appointment.diagnosises[0] }}</div>
          <div class="table-cell">{{ appointment.createdAt }}</div>
      </div>
      </div>
      <ModalComp :appointment="appointment" :open="isOpen" @close="isOpen = !isOpen" />
    </div>
  </template>
  <script>
  import ModalComp from './ModalComp.vue';
  import moment from 'moment'
    export default {
      props: [],
      components:{
        ModalComp
      },
      data() {
        return {
          appointments:[],
          isOpen:false,
          appointment: {
                _id: '',
                createdAt:null,
                diagnosises: [],
                prescriptions: [],
                rapport: '',
                age:null,
                files:[]
            },

        };
      },
      methods: {
        async fetchVisistPatient(){
        try{
         const id=localStorage.getItem('id')
         const res= await fetch(`http://localhost:3000/api/getVisitsPatient/${id}`);
         const data=await res.json()

         for(let app of data){
           app.createdAt=moment(app.createdAt).format('MMMM Do YYYY');
           this.appointments.push(app)
         }
        
        }catch(error){
          console.log(error)
        }  
        },
        change(appointment){
          this.isOpen=true
          this.appointment=appointment
        }
      },
      async created(){
        this.fetchVisistPatient()
      }
    }
  </script>
  <style scoped>
  .appointments-container {
    max-height: 550px; /* Set max height for the scrollable area */
    overflow-y: auto; /* Enable vertical scrolling */
    width: 70vw;
  }
  .table-header {
    height: 50px;
  }
  .appointments-container {
    overflow-y: auto; /* Enable vertical scrolling */
    overflow-x: hidden; /* Prevent horizontal scrolling */
    position: absolute;
    right: 60px;
    top: 100px;
  }
  
  .table {
    display: table; /* Ensure the table fills its container */
    table-layout: fixed; /* Fix the table layout */
    border-collapse: collapse;
    font-family: sans-serif;
    border-collapse: collapse;
    width: 70vw;
  }
  .table-header {
    display: table-row;
    position: sticky;
    top: 0;
    background-color: #2a4b66;
    z-index: 1;
    height: 50px;
    color: white;
  }
  .table-row {
    display: table-row;
    height: 50px;
  }
  .table-cell {
    display: table-cell;
    border-bottom: 1px solid rgba(0, 206, 200, 1);
    font-size: 20px;
    padding: 10px;
    color: #2a4b66;
  }
  .table-row:hover {
    background-color: rgba(0, 206, 200, 0.1); /* Optional: Add hover effect */
  }
  .header-cell {
    display: table-cell;
    color: white;
    padding: 8px;
  }
  .table-cell,
  .header-cell {
    display: table-cell;
    /*border-bottom: 1px solid rgba(0, 206, 200, 1);*/
    font-size: 20px;
    vertical-align: middle; /* Align text vertically to the middle */
    
  }
  .rmv-btn {
    padding-left: 120px;
    background-color: transparent;
    border: none;
  }
  .rmv-btn:hover {
    background-color: #2a4b66;
  }
  a {
    height: 50px;
    text-decoration: none;
  }
  .deleteButton{
    font-size: 20px;
  }
  </style>
  
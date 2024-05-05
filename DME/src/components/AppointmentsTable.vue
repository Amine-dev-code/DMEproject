<template>
  <div class="appointments-container">
    <div class="table">
      <div class="table-header">
        <div class="header-cell">FULL NAME</div>
        <div class="header-cell">PHONE</div>
        <div class="header-cell">DATE</div>
        <div class="header-cell">DELETE</div>
      </div>
      <div
       @click='checkExistingPatient(appointment.email)'
       to="/appointment"
        v-for="appointment in appointments"
        :key="appointment.id"
        class="table-row"
      >
        <div class="table-cell" style="height: min-content">{{ appointment.full_name }}</div>
        <div class="table-cell">{{ appointment.phone }}</div>
        <div class="table-cell">{{ appointment.visit_date }}</div>
        <div class="table-cell"><button class="deleteButton">DELETE</button></div>
    </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
  export default {
    props: [],
    data() {
      return {
        appointments:[]
      };
    },
    methods: {
      async fetchAppointments(){
      try{
       const res= await fetch('http://localhost:3000/api/getAppointment/66325051e0e2a989a8ca3cf4');
       const data=await res.json()
       
       for(let app of data){
        app.visit_date=moment(app.visit_date).format('MMMM Do YYYY');
        this.appointments.push(app)
       }
      
      }catch(error){
        console.log(error)
      }  
      },
      async checkExistingPatient(email){
        try{
          const res= await fetch(`http://localhost:3000/api/checkExistingPatient/${email}/66325051e0e2a989a8ca3cf4`);
          const data=await res.json()
          console.log(data.status)
          if(data.status=='success'){
            this.$router.push({ 
           path: '/appointments/addappointment', 
           query: { patientKey:JSON.stringify(data.info)} 
             });
          }
          if(data.status=='fail'){
            this.$router.push('/addPatient')
          }
          
        }catch(error){
          console.log(error.message)
        }
      }
    },
    async created(){
      this.fetchAppointments()
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

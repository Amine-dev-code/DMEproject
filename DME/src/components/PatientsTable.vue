<template>
  <div class="patients-container">
    <div class="table">
      <div class="table-header">
        <div class="header-cell">NAME</div>
        <div class="header-cell">PHONE NUMBER</div>
        <div class="header-cell">EMAIL ADDRESS</div>
      </div>
      <router-link to="/patient" v-for="patient in patientsData" :key="patient.id" :href="`/patient/${patient.id}`" class="table-row">
        <div class="table-cell">{{ patient.first_name }}</div>
        <div class="table-cell">{{ patient.phone }}</div>
        <div class="table-cell">{{ patient.email }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {

    async fetchUsers(){
      try{
       const res= await fetch('http://localhost:3000/api/getOwnPatients/66325051e0e2a989a8ca3cf4');
       const data=await res.json()
       this.patientsData=data
      }catch(error){
        console.log(error)
      }
    }
  },
  data() {
    return {
      patientsData: []
    };
  },
  async created(){
    await this.fetchUsers()
  }
}
</script>

<style>
.patients-container {
  max-height: 550px;
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
</style>

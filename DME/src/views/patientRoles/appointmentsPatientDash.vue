<template>
    
      <div>
    <SearchBar class="search-bar" />
    <router-link to="">
    </router-link>
    <AppointmentsPatientTable />
    
  </div>
  
  </template>
  
  <script>
  import AppointmentsPatientTable from '../../components/AppointmentsPatientTable.vue';
  import SearchBar from '@/components/SearchBar.vue'
  import SideBar from '@/components/SideBar.vue';
  
  export default {
    components: {
        AppointmentsPatientTable,
      SearchBar,
      SideBar
    }
  }
  </script>
  <style scoped>
 
  .search-bar {
    position: absolute;
    left: calc(20vw + 60px);
    top: 20px;
  }
  .add-appointment-btn {
    background-color: rgba(0, 206, 200, 1);
    color: white;
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 10px;
    position: absolute;
    right: 60px;
    font-size: 18px;
    font-family: sans-serif;
    top: 20px;
  }
  .add-appointment-btn:hover {
    background-color: rgba(0, 206, 200, 0.8);
  }
  .add-appointment-btn:active {
    background-color: rgba(0, 206, 200, 0.5);
  }
  .toSetSide{
    display:flex;
    justify-content: space-between
  }
  
  </style>
  
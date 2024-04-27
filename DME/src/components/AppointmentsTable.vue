<template>
<div class="appointments-container">
  <div class="table">
    <div class="table-header">
      <div class="header-cell">NAME</div>
      <div class="header-cell">TIME</div>
      <div class="header-cell">DATE</div>
      <div class="header-cell" style="padding-left: 120px;">DELETE</div>
    </div>
    <router-link to="/appointment" v-for="appointment in appointments" :key="appointment.id" class="table-row">
      <div class="table-cell">{{ appointment.name }}</div>
      <div class="table-cell">{{ appointment.time }}</div>
      <div class="table-cell">{{ appointment.date }}</div>
      <div class="table-cell">
        <button class="rmv-btn" @click.prevent="handleRmv">
          <img src="../assets/delete.png" alt="" style="background-color: transparent;">
        </button>
      </div>
    </router-link>
  </div>
</div>
  </template>
  <script>
  export default {
    props: ['id', 'name', 'date', 'time'],
    data() {
      return {
        appointments:[
          { id: 1, name: "John Doe", date: "2024-05-01", time: "09:00 AM" },
          { id: 2, name: "Jane Smith", date: "2024-05-02", time: "10:30 AM" },
          { id: 3, name: "Michael Johnson", date: "2024-05-03", time: "01:00 PM" },
          { id: 4, name: "Emily Davis", date: "2024-05-04", time: "02:30 PM" },
          { id: 5, name: "Chris Brown", date: "2024-05-05", time: "04:00 PM" },
          { id: 6, name: "Sarah Wilson", date: "2024-05-06", time: "05:30 PM" },
          { id: 7, name: "Alex Rodriguez", date: "2024-05-07", time: "07:00 PM" },
          { id: 8, name: "Jessica Martinez", date: "2024-05-08", time: "08:30 PM" },
          { id: 9, name: "David Thompson", date: "2024-05-09", time: "10:00 PM" },
          { id: 10, name: "Michelle Lee", date: "2024-05-10", time: "11:30 PM" }
        ]
      };
    },
    methods: {
      handleRmv() {
        return null
      }
    }
  }
  </script>
  <style>
  .appointments-container {
    max-height: 550px; /* Set max height for the scrollable area */
    overflow-y: auto; /* Enable vertical scrolling */
    width: 70vw;
    position: absolute;
    right: 60px;
    top: 100px;
  }
  .table-header {
    height: 50px;
  }
  .appointments-container {
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
  
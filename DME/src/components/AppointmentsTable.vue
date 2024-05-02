<template>
  <div class="appointments-container">
    <div class="table">
      <div class="table-header">
        <div class="header-cell">NAME</div>
        <div class="header-cell">TIME</div>
        <div class="header-cell">DATE</div>
      </div>
      <router-link
        to="/appointment"
        v-for="appointment in appointments"
        :key="appointment.id"
        class="table-row"
      >
        <div class="table-cell" style="height: min-content">{{ appointment.name }}</div>
        <div class="table-cell">{{ appointment.time }}</div>
        <div class="table-cell">{{ appointment.date }}</div>
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
</style>

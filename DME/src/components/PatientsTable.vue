<template>
  <div class="patients-container">
    <div class="table">
      <div class="table-header">
        <div class="header-cell">NAME</div>
        <div class="header-cell">PHONE NUMBER</div>
        <div class="header-cell">EMAIL ADDRESS</div>
      </div>
      <a v-for="patient in patientsData" :key="patient.id" :href="`/patient/${patient.id}`" class="table-row">
        <div class="table-cell">{{ patient.name }}</div>
        <div class="table-cell">{{ patient.phone }}</div>
        <div class="table-cell">{{ patient.email }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    patients: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      patientsData: [
        {
          id: 1,
          name: "John Doe",
          birthday: "1990-05-15",
          gender: "Male",
          address: "123 Main St, Cityville",
          phone: "555-123-4567",
          email: "john@example.com"
        },
        {
          id: 2,
          name: "Jane Smith",
          birthday: "1985-08-22",
          gender: "Female",
          address: "456 Elm St, Townsville",
          phone: "555-987-6543",
          email: "jane@example.com"
        },
        {
          id: 3,
          name: "Jane Smith",
          birthday: "1985-08-22",
          gender: "Female",
          address: "456 Elm St, Townsville",
          phone: "555-987-6543",
          email: "jane@example.com"
        },
        {
          id: 4,
          name: "Jane Smith",
          birthday: "1985-08-22",
          gender: "Female",
          address: "456 Elm St, Townsville",
          phone: "555-987-6543",
          email: "jane@example.com"
        },
        {
          id: 5,
          name: "Jane Smith",
          birthday: "1985-08-22",
          gender: "Female",
          address: "456 Elm St, Townsville",
          phone: "555-987-6543",
          email: "jane@example.com"
        },
        // Add more dummy patient data as needed
      ]
    };
  }
}
</script>

<style>
.patients-container {
  max-height: 200px;
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  position: absolute;
  right: 60px;
  bottom: 60px;
}

.table {
  display: table; /* Ensure the table fills its container */
  table-layout: fixed; /* Fix the table layout */
  border-collapse: collapse;
  font-family: sans-serif;
  border-collapse: collapse;
  width: 70vw; /* Change the width to 75vw */
}

.table-header {
  border-radius: 50%;
  background-color: rgba(0, 206, 200, 0.3); /* Optional: Add hover effect */
  display: table-row;
  position: sticky; /* Make the header sticky */
  top: 0; /* Stick the header to the top */
  background-color: rgba(0, 206, 200, 1); /* Optional: Add background color for header */
  z-index: 1; 
  height: 50px;
}
.table-row {
  display: table-row;
}

.table-cell {
  display: table-cell;
  color: rgba(67, 106, 230, 1);
  border-bottom: 1px solid rgba(0, 206, 200, 1);
  font-size: 20px;
  padding: 10px;
}

.table-row:hover {
  background-color: rgba(0, 206, 200, 0.1); /* Optional: Add hover effect */
}

.header-cell {
  display: table-cell;
  color: #2a4b66;
  padding: 8px;
  border-bottom: 1px solid rgba(0, 206, 200, 1);
}
.table-cell,
.header-cell {
  display: table-cell;
  color: rgba(67, 106, 230, 1);
  border-bottom: 1px solid rgba(0, 206, 200, 1);
  font-size: 20px;
  vertical-align: middle; /* Align text vertically to the middle */
}
</style>

<template>
  <div class="patients-container">
    <div class="table">
      <div class="table-header">
        <div class="header-cell">NAME</div>
        <div class="header-cell">PHONE NUMBER</div>
        <div class="header-cell">EMAIL ADDRESS</div>
        <div class="header-cell" style="padding-left: 120px;">DELETE</div>
      </div>
      <router-link to="/patient" v-for="patient in patientsData" :key="patient.id" :href="`/patient/${patient.id}`" class="table-row">
        <div class="table-cell">{{ patient.name }}</div>
        <div class="table-cell">{{ patient.phone }}</div>
        <div class="table-cell">{{ patient.email }}</div>
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
  props: {
    patients: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleRmv() {
      if(confirm("are you sure you want to delete this patient?")) {
        alert("aya ok ay");
      }
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
        {
          id: 6,
          name: "Jane Smith",
          birthday: "1985-08-22",
          gender: "Female",
          address: "456 Elm St, Townsville",
          phone: "555-987-6543",
          email: "jane@example.com"
        },
        {
          id: 7,
          name: "Jane Smith",
          birthday: "1985-08-22",
          gender: "Female",
          address: "456 Elm St, Townsville",
          phone: "555-987-6543",
          email: "jane@example.com"
        },
        {
          id: 8,
          name: "Jane Smith",
          birthday: "1985-08-22",
          gender: "Female",
          address: "456 Elm St, Townsville",
          phone: "555-987-6543",
          email: "jane@example.com"
        },
        {
          id: 8,
          name: "Jane Smith",
          birthday: "1985-08-22",
          gender: "Female",
          address: "456 Elm St, Townsville",
          phone: "555-987-6543",
          email: "jane@example.com"
        },
        {
          id: 9,
          name: "Jane Smith",
          birthday: "1985-08-22",
          gender: "Female",
          address: "456 Elm St, Townsville",
          phone: "555-987-6543",
          email: "jane@example.com"
        },
        {
          id: 10,
          name: "Jane Smith",
          birthday: "1985-08-22",
          gender: "Female",
          address: "456 Elm St, Townsville",
          phone: "555-987-6543",
          email: "jane@example.com"
        },
        {
          id: 11,
          name: "Jane Smith",
          birthday: "1985-08-22",
          gender: "Female",
          address: "456 Elm St, Townsville",
          phone: "555-987-6543",
          email: "jane@example.com"
        },
        {
          id: 12,
          name: "Jane Smith",
          birthday: "1985-08-22",
          gender: "Female",
          address: "456 Elm St, Townsville",
          phone: "555-987-6543",
          email: "jane@example.com"
        },
        {
          id: 13,
          name: "Jane Smith",
          birthday: "1985-08-22",
          gender: "Female",
          address: "456 Elm St, Townsville",
          phone: "555-987-6543",
          email: "jane@example.com"
        },
        {
          id: 14,
          name: "Jane Smith",
          birthday: "1985-08-22",
          gender: "Female",
          address: "456 Elm St, Townsville",
          phone: "555-987-6543",
          email: "jane@example.com"
        },
        {
          id: 15,
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

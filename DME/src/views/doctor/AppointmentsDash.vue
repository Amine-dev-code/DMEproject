<template>
  <SearchBar class="search-bar" />
  <router-link to="/appointments/addappointment">
  </router-link>
  <AppointmentsTable />
</template>

<script>
import AppointmentsTable from '@/components/AppointmentsTable.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  components: {
    AppointmentsTable,
    SearchBar
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
</style>

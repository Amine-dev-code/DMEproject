<template>
  <SearchBar class="search-bar" />
  <PatientsTable />
  <router-link to="/patients/addpatient" style="height: 100%; width: 100%">
    <button class="add-patient-btn">add a patient</button>
  </router-link>
  <router-view />
</template>
<script>
import PatientsTable from '@/components/PatientsTable.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  components: {
    PatientsTable,
    SearchBar
  }
}
</script>
<style scoped>
.add-patient-btn {
  background-color: rgba(0, 206, 200, 1);
  color: white;
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 10px;
  position: absolute;
  right: 100px;
  font-size: 18px;
  font-family: sans-serif;
  top: 20px;
  padding: unset;
}
.add-patient-btn:hover {
  background-color: rgba(0, 206, 200, 0.8);
}
.add-patient-btn:active {
  background-color: rgba(0, 206, 200, 0.5);
}
.search-bar {
  position: absolute;
  left: 280px;
  top: 20px;
}
</style>

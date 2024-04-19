<template>
  <SignUp />
  <!-- <UserTable /> -->
  <!-- <UserList />
  <UserInstance
    name="idir oudlkhaoua"
    birthday="2003-08-23"
    gender="plastic bag"
    phone="06666666"
    address="the FOCKING"
  /> -->
  <!-- <DashboardGrid /> -->
  <!-- <nav-bar /> -->
  <!-- <side-bar />
  <div
    style="
      margin-left: 200px;
      justify-content: space-between;
      gap: 10px;
    "
  >
    <div style="display: flex; flex-direction: row; justify-content: space-between">
      <search-bar />
      <date-n-time />
    </div>
    <div style="display: flex; flex-direction: row; justify-content: space-between; gap: 10px">
      <welcome-doctor name="idir" />
      <total-card />
      <total-card />
      <donut-circle />
      <note-sheet />
    </div>
    <patient-count />
  </div> -->
  <!-- <router-view /> -->
</template>

<script>
// import NavBar from './components/NavBar.vue'
/*import SideBar from './components/SideBar.vue'
import SearchBar from './components/SearchBar.vue'
import WelcomeDoctor from './components/WelcomeDoctor.vue'
import totalCard from './components/TotalCard.vue'
import NoteSheet from './components/NoteSheet.vue'
import DateNTime from './components/DateNTime.vue'
import DonutCircle from './components/DonutCircle.vue'*/
// import DashboardGrid from './layouts/DashboardGrid.vue'
// import UserInstance from './components/UserInstance.vue'
// import UserList from './components/UserList.vue'
// import PatientCount from './components/PatientCount.vue'

// import UserTable from './components/UserTable.vue'
import SignUp from './components/SignUp.vue'

export default {
  components: {
    // NavBar,
    /*SideBar,
    SearchBar,
    WelcomeDoctor,
    totalCard,
    DateNTime,
    NoteSheet,
    DonutCircle,*/
    // DashboardGrid
    // UserInstance,
    // UserList
    // PatientCount,
    // UserTable
    SignUp
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>

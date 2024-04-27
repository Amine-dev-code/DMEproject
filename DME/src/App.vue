<template>
  <!-- <AppointmentsDash/> -->
  <SideBar/>
  <div style="display: flex; flex-direction:row; margin-left: 21vw; justify-content: space-between; gap : 80px;">
    <DocAppointmentForm/>
    <PatientProfilePreview/>
  </div>
</template>

<script>
import AppointmentsDash from './views/doctor/AppointmentsDash.vue';
import DocAppointmentForm from './components/DocAppointmentForm.vue';
import SideBar from './components/SideBar.vue';
import PatientProfilePreview from './components/PatientProfilePreview.vue';
export default {
  components: {
    AppointmentsDash,
    DocAppointmentForm,
    SideBar,
    PatientProfilePreview
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
</style>

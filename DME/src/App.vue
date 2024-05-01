<template>
  <!---<PatientProfileCard /> -->
  <!-- <DocumentContainer /> -->
  <!-- <AppointmentData /> -->
   <router-View /> 
</template>

<script>
import AppointmentData from './views/doctor/AppointmentData.vue'
import DocumentContainer from './components/DocumentContainer.vue'
import PatientProfileCard from './components/PatientProfileCard.vue'
export default {
  components: {
    AppointmentData,
    DocumentContainer,
    PatientProfileCard
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

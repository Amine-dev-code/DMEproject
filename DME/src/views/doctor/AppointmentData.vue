<template>
  <div
    style="
      display: flex;
      flex-direction: row;
      gap: 20px;
      width: calc(100vw - 400px);
      margin-top: 20px;
    "
  >
    <DocAppointmentForm />
    <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 55px">
      <AppointmentPreview time="11:40Am" date="23-08-2003" />
      <PatientProfilePreview :patient="patient" />
    </div>
  </div>
</template>

<script>
import DocAppointmentForm from '../../components/DocAppointmentForm.vue'
import PatientProfilePreview from '../../components/PatientProfilePreview.vue'
import AppointmentPreview from '../../components/AppointmentPreview.vue'
export default {
  components: {
    DocAppointmentForm,
    PatientProfilePreview,
    AppointmentPreview
  },
  data(){
    return{
      patient:''
    }
  },
  created(){
   this.patient=JSON.parse(this.$route.query.patientKey);
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: white;
}
</style>

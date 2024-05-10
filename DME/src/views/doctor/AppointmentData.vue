<template>
  <div class="toSetSide">
    <SideBar/>
  <div
    style="
      display: flex;
      flex-direction: row;
      gap: 20px;
      width: calc(100vw - 400px);
      margin-top: 20px;
      margin: 20px;
      margin-left:270px
    "
  >
    <DocAppointmentForm :patientId="patientId" />
    <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 55px">
      <AppointmentPreview time="11:40Am" date="23-08-2003" />
      <PatientProfilePreview :patientId="patientId" />
    </div>
  </div>

</div>
</template>

<script>
import DocAppointmentForm from '../../components/DocAppointmentForm.vue'
import PatientProfilePreview from '../../components/PatientProfilePreview.vue'
import AppointmentPreview from '../../components/AppointmentPreview.vue'
import SideBar from '@/components/SideBar.vue'
export default {
  components: {
    DocAppointmentForm,
    PatientProfilePreview,
    AppointmentPreview,
    SideBar
  },
  data(){
    return{
      patientId:''
    }
  },
  created(){
   
    this.patientId = JSON.parse(this.$route.query.patientId || this.$route.query.patientKey);
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
.toSetSide{
  display:flex;
  justify-content:space-between
}
</style>

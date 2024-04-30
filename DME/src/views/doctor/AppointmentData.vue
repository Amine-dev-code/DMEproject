<template>
    <SideBar/>
    <router-view/>
    <div style="display: flex; flex-direction:row; margin-left: 21vw; justify-content: space-between; gap : 0px;">
      <DocAppointmentForm/>
      <div style="display: flex; flex-direction: column; gap : 5px; margin-top: 16.5vh;">
        <AppointmentPreview time="11:40Am" date="23-08-2003" />
        <PatientProfilePreview/>
      </div>
    </div>
  </template>
  
  <script>
  import DocAppointmentForm from '../../components/DocAppointmentForm.vue';
  import SideBar from '../../components/SideBar.vue';
  import PatientProfilePreview from '../../components/PatientProfilePreview.vue';
  import AppointmentPreview from '../../components/AppointmentPreview.vue';
  export default {
    components: {
      DocAppointmentForm,
      SideBar,
      PatientProfilePreview,
      AppointmentPreview
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
  
<template>
  <PatientsDash/>
</template>

<script>
import PatientsDash from '@/views/doctor/PatientsDash.vue';
import SideBar from '@/components/SideBar.vue';
export default {
  components: {
    PatientsDash,
    SideBar
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

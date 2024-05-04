<template>
  <div class="container">
    <PatientProfileCard />
    <AppointmentHistory/>
  </div>
</template>
<script>
import PatientProfileCard from '@/components/PatientProfileCard.vue'
import AppointmentHistory from '@/components/AppointmentHistory.vue';
export default {
  components: {
    PatientProfileCard,
    AppointmentHistory
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 20px;
  justify-content: unset;
}
</style>

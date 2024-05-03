<template>
  <div class="container">
    <PatientProfileCard />
    <DocumentContainer />
  </div>
</template>
<script>
import PatientProfileCard from '@/components/PatientProfileCard.vue'
import DocumentContainer from '@/components/DocumentContainer.vue'
export default {
  components: {
    PatientProfileCard,
    DocumentContainer
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  height: auto;
  gap: 20px;
  justify-content: unset;
}
</style>

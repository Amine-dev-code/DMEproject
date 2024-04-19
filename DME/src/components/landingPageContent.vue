<template>
  <div class="LandPageContent">
    <h1>Where empathy intersects with ease</h1>
    <doctor-illustration />
  </div>
</template>

<script>
import doctorIllustration from './doctorIllustration.vue'

export default {
  components: {
    doctorIllustration
  }
}
</script>

<style>
.LandPageContent {
  display: flex;
  flex-direction: row;
  height: 100vh;
  margin: none;
  justify-content: center;
  align-items: center;
}
.LandPageContent > h1 {
  margin-left: 50px;
}
h1 {
  font-family: sans-serif;
  color: #2a4b66;
  font-weight: lighter;
  font-size: 48px;
}
</style>

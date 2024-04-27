<template>
  <NavBar/>
  <section style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
    <p style="font-size: 44px; text-align: center; color: #2a4b66; padding-left: 50px;">
      Where empathy intersects with ease
    </p>
    <img src="../assets/doctor.svg" alt="" style="height: 100vh;">
  </section>
  <section style="height: 100vh; background-color: #2a4b66;">

  </section>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  export default {
    components: {
      NavBar
    }
  }
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
<template>
  <div class="welcomeContainer">
    <img src="../assets/welcome.svg" alt="" />
    <div style="display: flex; flex-direction: column; color: white; font-family: sans-serif">
      <p>Hello there Dr. {{ name }}, How are you feeling today ?</p>
      <p style="align-items: center; padding-right: 10px">
        To summarize it all up for today, we have
        <span>17</span> regular appointments 
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style scoped>
.welcomeContainer {
  background-color: rgba(0, 206, 200, 0.1);
  background-color: #00cec8;
  border: 2px solid #00cec8;
  width: 50vw;
  height: 150px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
}
img {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 150px;
  width: auto;
}
span {
  color: rgba(67, 106, 230, 0.5);
  font-weight: bold;
}
</style>

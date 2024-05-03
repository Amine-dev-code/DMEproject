<template>
  <div class="appointment-preview-container">
    <p>date: {{ date }}</p>
    <p>time: {{ time }}</p>
  </div>
</template>

<script>
export default {
  props: ['date', 'time']
}
</script>

<style scoped>
.appointment-preview-container {
  height: 70px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  border-radius: 10px;
  border: 2px solid #00cec8;
  color: #2a4b66;
  display: inline-flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
}
.appointment-preview-container > p {
  padding-left: 10px;
}
</style>

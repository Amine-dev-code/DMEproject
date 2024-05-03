<template>
  <div class="hours-container">
    <div class="weekdays">
      <button class="days active">Sun</button>
      <button class="days">Mon</button>
      <button class="days">Tue</button>
      <button class="days">Wed</button>
      <button class="days">Thu</button>
      <button class="days">Fri</button>
      <button class="days">Sat</button>
    </div>
    <div style="display: flex; flex: 1">
      <SunDay />
    </div>
  </div>
</template>

<script>
import SunDay from '@/components/days/SunDay.vue'
export default {
  components: {
    SunDay
  }
}
</script>

<style scoped>
.hours-container {
  height: 20vh;
  width: 30vw;
  border: 2px solid rgba(0, 206, 200, 0.5);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.weekdays {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 10px;
  padding: 10px;
}
.days {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #2a4b66;
  background-color: rgba(42, 75, 102, 0.1);
}
</style>

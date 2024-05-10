<template>
  <div class="hours-container">
    <div class="weekdays">
      <button class="days" @click="index = 1" :class="{active : index == 1 }">Sun</button>
      <button class="days" @click="index = 2" :class="{active : index == 2 }">Mon</button>
      <button class="days" @click="index = 3" :class="{active : index == 3 }">Tue</button>
      <button class="days" @click="index = 4" :class="{active : index == 4 }">Wed</button>
      <button class="days" @click="index = 5" :class="{active : index == 5 }">Thu</button>
      <button class="days disabled" :disabled="true">Fri</button>
      <button class="days" @click="index = 7" :class="{active : index == 7 }">Sat</button>
    </div>
    <div style="display: flex; flex: 1">
      <SunDay v-show="index == 1"/>
      <MonDay v-show="index == 2"/>
      <TuesDay v-show="index == 3"/>
      <WednesDay  v-show="index == 4"/>
      <ThursDay  v-show="index == 5"/>
      <FriDay  v-show="index == 6"/>
      <SaturDay  v-show="index == 7"/>
    </div>
  </div>
</template>

<script>
import SunDay from '@/components/days/SunDay.vue'
import MonDay from '@/components/days/MonDay.vue'
import TuesDay from '@/components/days/TuesDay.vue'
import WednesDay from '@/components/days/WednesDay.vue'
import ThursDay from '@/components/days/ThursDay.vue'
import SaturDay from '@/components/days/SaturDay.vue'

export default {
  components: {
    SunDay,
    MonDay,
    TuesDay,
    WednesDay,
    ThursDay,
    SaturDay
  },
  data() {
    return {
      index: 1
    };
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
.active {
  background-color: rgba(0, 206, 200, 0.2);
  color: rgba(0, 206, 200, 1);
}
.disabled {
  background-color: #f3f3f3;
  color: rgba(128, 128, 128, 0.61);
}
</style>

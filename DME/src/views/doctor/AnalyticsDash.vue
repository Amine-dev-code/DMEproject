<template>
  <div class="setSideBar">
    <SideBar/>
  <div class="home-container">
    <WelcomeDoctor class="welcome" />
    <div
      style="
        display: flex;
        flex-direction: row;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        gap: 10px;
      "
    >
      <div class="total-container">
        <TotalCard class="total-patients" total-name="patients" total-num="100" />
        <TotalCard class="total-visits" total-name="appointments" total-num="500" />
      </div>
      <DateNTime />
    </div>
    <DonutCircle class="donut-circle" />
    <PatientCount class="patient-count" />
  </div>

  </div>
  
</template>
<script>
import WelcomeDoctor from '@/components/WelcomeDoctor.vue'
import TotalCard from '@/components/TotalCard.vue'
import DonutCircle from '@/components/DonutCircle.vue'
import PatientCount from '@/components/PatientCount.vue'
import DateNTime from '@/components/DateNTime.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  components: {
    WelcomeDoctor,
    TotalCard,
    DonutCircle,
    PatientCount,
    DateNTime,
    SideBar
  }
}
</script>
<style scoped>
.home-container {
  margin: 40px;
  margin-left:270px;
  display: grid;
  grid-template-columns: 50vw 300px;
  grid-template-rows: 150px auto;
  grid-column-gap: 10px;
  grid-row-gap: 40px;
}
.welcome {
  display: flex;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.total-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.total-patients {
  display: flex;
  align-items: center;
  justify-content: center;
}
.donut-circle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  align-items: center;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}
.patient-count {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}
.setSideBar{
  display:flex;
  justify-content:flex-start
}
</style>

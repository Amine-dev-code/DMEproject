<template>
  <div class="GridContainer">
    <div class="SearchBar">Search bar</div>
    <div class="Date">Date</div>
    <div class="main">
      <div class="Welcome">
        welcome
        <!-- <WelcomeDoctor /> -->
      </div>
      <div class="appointments">
        app
        <!-- <TotalCard /> -->
      </div>
    </div>
    <div class="money">
      money
      <!-- <TotalCard /> -->
    </div>
    <div class="Bar">Bar chart</div>
    <div class="Donut">Donut chart</div>
    <div class="note">note</div>
  </div>
</template>
<script>
import WelcomeDoctor from '@/components/WelcomeDoctor.vue'
import TotalCard from '@/components/TotalCard.vue'
export default {
  components: {
    WelcomeDoctor,
    TotalCard
  }
}
</script>
<style>
.GridContainer {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 15% 15% 15% 15% 15%;
  gap: 20px;
  justify-content: center;
}
.GridContainer div {
  background-color: lightblue;
  border-radius: 10px;
}
.SearchBar {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.Date {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}
.main {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(1, 1fr);
}
.main div {
  align-items: center;
  justify-content: center;
}
.main .money {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
.main .Welcome {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
}
.main .appointments {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}
.Bar {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 6;
}
.Donut {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
}
.note {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 6;
}
</style>

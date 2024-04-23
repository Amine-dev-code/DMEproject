<template>
  <DateNTime id="time"/>
  <SearchBar id="search-bar"/>
  <WelcomeDoctor name="idir ouldkhaoua" id="welcome"/>
  <TotalCard id="total-appointment" totalName="appointments" totalNum="500"/>
  <SideBar name="idir ouldkhaoua" />
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import DateNTime from '@/components/DateNTime.vue';
import SearchBar from '@/components/SearchBar.vue';
import WelcomeDoctor from '@/components/WelcomeDoctor.vue';
import TotalCard from '@/components/TotalCard.vue';

export default {
  components: {
    SideBar,
    DateNTime,
    SearchBar,
    WelcomeDoctor,
    TotalCard
  }
}
</script>

<style>
#time {
  position: absolute;
  right: 10px ;
  top: 10px ;
}
#search-bar {
  position: absolute;
  left: 195px ;
  top: 0px ;
}
#welcome {
  position: absolute;
  left: 205px ;
  top: 70px ;
}
#total-appointment {
  position: absolute;
  right: 10px ;
  top: 70px ;
}
</style>

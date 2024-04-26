<template>
  <SideBar name="idir ouldkhaoua" />
  <!-- <HomeDash class="home" /> -->
  <PatientsDash/>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import HomeDash from './HomeDash.vue'
import PatientsDash from './PatientsDash.vue';
export default {
  components: {
    SideBar,
    HomeDash,
    PatientsDash
  }
}
</script>

<style>
#time {
  position: absolute;
  right: 10px ;
  top: 10px ;
}
.home {
  height: 80%;
  width: 70%;
  position: absolute ;
  left: 23vw;
  top: 100px;
}
</style>

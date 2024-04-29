<template>
  <NavBar class="navbar" />
  <section class="main">
    <p>
      Where empathy intersects with ease
    </p>
    <img src="../assets/doctor.svg" alt="" style="height: 100vh;">
  </section>
  <section id="doctors">
    <DoctorsList/>
  </section>
  <section id="location">
      <div class="address">
        address of the clinic
      </div>
      <mapContainer class="map" />
  </section>
  <section id="hours">
    hours
  </section>
  <section id="appointment">
    <guestAppointmentForm/>
  </section>
  <section id="contact">
    contact
  </section>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import DoctorsList from '@/views/DoctorsList.vue';
import guestAppointmentForm from '@/views/guestAppointmentForm.vue';
import mapContainer from '@/components/mapContainer.vue'
export default {
  components: {
    NavBar,
    DoctorsList,
    guestAppointmentForm,
    mapContainer
  }
}
</script>

<style>
.main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
}
.main p {
  font-size: 40px ;
  font-family: sans-serif;
  color: #2a4b66;
  padding-left: 60px;
}
section {
  width: 100vw;
  height: 100vh;
}
.navbar {
  position: fixed;
}
#doctors {
  background-image: 
  linear-gradient(
    to top right, white, #00cec8
  );
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
}
#appointment {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
}
#location {
  display: flex;
  flex-direction: row;
}
.address {
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
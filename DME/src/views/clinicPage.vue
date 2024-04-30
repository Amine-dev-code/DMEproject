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
  <section id="appointment">
    <guestAppointmentForm/>
  </section>
  <section id="aboutus">
      <div class="aboutus-container">
        <div>
          <p>
            Hours:
          </p>

        </div>
        <hr style="width: 30vw; border: 1px solid rgba(42, 75, 102, 0.1);">
        <div>
          <p>
            Contact us
          </p>
          <input type="text" name="name" placeholder="name">
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button @click.prevent="">
            Send email
          </button>
        </div>
      </div>
      <mapContainer class="map" />
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
#aboutus {
  display: flex;
  flex-direction: row;
}
.aboutus-container {
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.aboutus-container div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items:center;
}
.aboutus-container > div > input, .aboutus-container div > textarea {
  width: 30vw;
  border-radius: 5px;
  border: 2px solid rgba(0, 206, 200, 0.5) ;
  font-size: 14px;
  padding-left: 10px;
}
.aboutus-container > div > input {
  height: 40px;
}
.aboutus-container > div > input::placeholder {
  color: rgba(42, 75, 102, 0.5);
  padding-left: 10px;
}
.aboutus-container > div > button {
  width: 10vw;
  height: 40px;
  font-weight:normal;
  font-size: 14px;
  background-color: rgba(67, 106, 230, 1);
  color: white;
  border: none;
  border-radius: 5px;
}
.aboutus-container > div > button:hover {
  background-color: rgba(67, 106, 230, 0.8);
}
.aboutus-container > div > button:active {
  background-color: rgba(67, 106, 230, 0.5);
}
.aboutus-container p {
  color: #2a4b66 ;
}
</style>
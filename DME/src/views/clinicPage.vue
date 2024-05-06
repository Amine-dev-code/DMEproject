<template>
  <NavBar class="navbar" />
  <section class="main">
    <p>
      Where empathy intersects with ease
    </p>
    <img src="../assets/doctor.svg" alt="" style="height: 100vh;">
  </section>
  <section id="doctors">
    <doc-slide/>
  </section>
  <section id="appointment">
    <h1>
      Book an appointment
    </h1>
    <guestAppointmentForm/>
  </section>
  <section id="aboutus">
      <div class="aboutus-container">
        <div>
          <p>
            Hours:
          </p>
          <workingHours/>
        </div>
        <hr style="width: 30vw; border: 1px solid rgba(42, 75, 102, 0.1);">
        <div>
          <p>
            Contact us
          </p>
          <input type="text" name="name" placeholder="name">
          <textarea name="" id="" cols="30" rows="10" placeholder="enter message" />
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
import guestAppointmentForm from '@/views/guestAppointmentForm.vue';
import mapContainer from '@/components/mapContainer.vue';
import workingHours from '@/components/workingHours.vue';
import DocSlide from '@/components/DocSlide.vue';
export default {
  components: {
    DocSlide,
    NavBar,
    guestAppointmentForm,
    mapContainer,
    workingHours
  },
  data() {
    return {
      
    };
  },
}
</script>

<style scoped>
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
  box-sizing: border-box;
}
.navbar {
  position: fixed;
}
#doctors {
  padding: 2rem;
  background: linear-gradient(
    -45deg, white, #00cec8
  );
  min-height: 100vh;
  margin: 0;
  display: flex;
  justify-content:center;
  align-items: center;
}
/*.card {
  padding: 2rem;
  width: 90vw;
  height: 90vh;
  min-height: 35em;
  max-width: 1050px;
  position: relative;
}
.panel-1, .panel-2 {
  position: absolute;
  box-shadow: 0 0 4em 3em rgba(0, 0, 0, 0.1);
  border-radius: 2em;
  top: 50%;
  transform: translateY(-50%);
}
.panel-1 {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  right: 0;
  width: 80%;
  height: 90%;
  overflow: hidden;
  z-index: 1;
  transition: 0.3s;
}
.panel-1::before {
  content: '';
  background: linear-gradient(
    45deg, 
    white 0%,
    white 40%,
    white 80%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.panel-2 {
  background: linear-gradient(
    white 0%, 
    #00cec8 100%
  );
  left: 0;
  width: 50%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}
.panel-2::before {
  content: '';
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: -5em;
  transform: translateY(-50%) rotate(-90deg);
  z-index: 2;
}
.arrow-left, .arrow-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 4em;
  height: 4em;
  background: cyan;
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 4.2em;
  z-index: 2;
  transition: 0.3s;
  cursor: pointer;
}
.arrow-left i, .arrow-right i {
  font-size: 1.5em;
}
.arrow-left {
  left: -1em; 
}
.arrow-right {
  right: -1em;
}
.arrow-left:hover, .arrow-right:hover {
  background: white;
  color: cyan;
}*/
#appointment {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
}
#appointment > h1 {
  font-size: 40px;
  font-weight: lighter;
  color: rgba(42, 75, 102, 1);
}
#aboutus {
  display: flex;
  /*flex-direction: row;*/
}
.aboutus-container {
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.aboutus-container > div {
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
.aboutus-container div > textarea {
  padding-top: 10px;
}
.aboutus-container div > textarea::placeholder, .aboutus-container > div > input::placeholder {
  color: rgba(42, 75, 102, 0.5);
}
.aboutus-container > div > input {
  height: 40px;
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
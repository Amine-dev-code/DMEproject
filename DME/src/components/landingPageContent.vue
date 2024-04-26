<template>
    <NavBar/>
    <section class="LandPageContent">
      <div class="section_content">
          <text ref="svgElement" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            Where empathy intersects with ease
          </text>
      </div>
      <img src="@/assets/doctor.svg" style="height: 100%;" />
    </section>
    <section class="doctors-section">
      <div class="section_content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo rerum pariatur deleniti nihil velit possimus quam explicabo, perferendis eius nisi, nobis nulla harum labore veniam consequuntur itaque ab voluptas asperiores?
      </div>
    </section>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  components: {
    NavBar
  }
}
</script>
<style>
section {
	min-height: 100vh;
	width: 100vw;
}

.LandPageContent {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  margin: none;
  justify-content: space-between;
  align-items: center;
}
.doctors-section {
  background-color: #2a4b66 ;
  min-height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    position: sticky;
    top: 0;
    overflow: hidden;
    color: white ;
  font-size: 24px;
  padding: 40px;
}
.LandPageContent > h1 {
  margin-left: 50px;
}
h1 {
  font-family: sans-serif;
  color: #2a4b66;
  font-weight: lighter;
  font-size: 48px;
}

</style>

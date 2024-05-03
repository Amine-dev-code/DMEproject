<template>
  <div class="navBarContainer">
    <a href="#doctors" :class="{ active: isActive('/#doctors') }">Doctors</a>
    <a href="#appointment" :class="{ active: isActive('/#appointment') }">Appointment</a>
    <a href="#aboutus" :class="{ active: isActive('/#aboutus') }">About us</a>
    <RouterLink to="/login" :class="{ active: isActive('/login') }">Login</RouterLink>
  </div>
  <router-view/>
</template>

<script setup>
import { useRoute } from 'vue-router'

// Get the current route
const route = useRoute()

// Function to determine if a link is active
const isActive = (path) => {
  return route.path === path
}
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navBarContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  position: fixed;
  left: 50px;
  top: 30px;
}
a {
  text-decoration: none;
  color: #2a4b66;
  font-size: 24px;
  font-family: sans-serif;
  padding: 5px;
  z-index: 20;
  border-radius: 5px;
}
a:hover {
  color: #00cec8;
  background-color: rgba(0, 206, 200, 0.1);
  border: 0px solid #00cec8;
}
.active {
  color: #00cec8;
  background-color: rgba(0, 206, 200, 0.1);
  border: 0px solid #00cec8;
}
</style>

<template>
  <div class="navBarContainer">
    <a href="#doctors" :class="{ active: isActive('#doctors') }">Doctors</a>
    <a href="#location" :class="{ active: isActive('/location') }">Location</a>
    <a href="#hours" :class="{ active: isActive('/hours') }">Hours</a>
    <a href="#appointment" :class="{ active: isActive('/signup') }">Appointment</a>
    <a href="#contact" :class="{ active: isActive('/contact') }">Contact</a>
    <RouterLink to="/login" :class="{ active: isActive('/login') }">Login</RouterLink>
  </div>
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

<style>
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
  position: absolute;
  left: 50px;
  top: 30px;
}
a {
  text-decoration: none;
  color: #2a4b66;
  font-size: 24px;
  font-family: sans-serif;
  padding: 5px;
  border-radius: 5px;
  mix-blend-mode: difference;
  transform: translateY(-50%);
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

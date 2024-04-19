<template>
  <div class="navBarContainer">
    <RouterLink to="/doctors" :class="{ active: isActive('/doctors') }">Doctors</RouterLink>
    <RouterLink to="/location" :class="{ active: isActive('/location') }">Location</RouterLink>
    <RouterLink to="/hours" :class="{ active: isActive('/hours') }">Hours</RouterLink>
    <RouterLink to="/contact" :class="{ active: isActive('/contact') }">Contact</RouterLink>
    <RouterLink to="/login" :class="{ active: isActive('/login') }">Login</RouterLink>
    <RouterLink to="/signup" :class="{ active: isActive('/signup') }">Sign up</RouterLink>
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

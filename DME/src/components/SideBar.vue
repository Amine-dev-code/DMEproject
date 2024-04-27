<template>
  <div class="SideBarContainer">
    <div class="profile">
        <img src="" alt="Profile Picture" class="profilePicture"/>
        <p>{{ name }}</p>
    </div>
    <div class="menu">
      <router-link to="/" :class="{ active: isActive('/') }">Home</router-link>
      <router-link to="/appointments" :class="{ active: isActive('/appointments') }"
        >Appointments</router-link
      >
      <router-link to="/patients" :class="{ active: isActive('/patients') }">Patients</router-link>
      <router-link to="/messages" :class="{ active: isActive('/messages') }">Messages</router-link>
    </div>
    <router-link to="/clinic" class="log-out">Log out</router-link>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  props: ['name', 'id'],
  setup() {
    // Get the current route
    const route = useRoute()

    // Function to determine if a link is active
    const isActive = (path) => {
      return route.path === path
    }

    return {
      isActive
    }
  }
}
</script>

<style>
.SideBarContainer {
  position: fixed;
  left: 0;
  width: 20vw;
  height: 100vh;
  background-color: #2a4b66;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center ;
  font-family: sans-serif;
  font-size: 20px;
}
.profile {
  color: white;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center ;
  gap: 20px;
  flex: 3;
  flex-basis: 0;
}
.profilePicture {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 7;
  flex-basis: 0;
}
.menu > * {
  width: 120%;
  padding: 15px;
  border-radius: 10px;
  color: white;
}
.active {
  background-color: rgba(0, 206, 200, 0.1);
  color: #00cec8;
}
.log-out {
  position: absolute;
  bottom: 10px;
  left: 20px;
  color: white;
}
</style>

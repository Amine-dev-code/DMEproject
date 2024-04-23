<template>
  <div class="SideBarContainer">
    <div class="profile">
      <div class="profilePicture">
        <img src="" alt="Profile Picture" />
      </div>
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
  width: 15vw;
  height: 100vh;
  background-color: #2a4b66;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  font-size: 20px;
}

a {
  color: white;
  text-decoration: none;
}
.profile {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  flex: 3;
  flex-basis: 0;
}
.profilePicture img {
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
  width: 90%;
  padding: 15px;
  border-radius: 10px;
}
.active {
  background-color: rgba(0, 206, 200, 0.1);
  color: #00cec8;
}
</style>

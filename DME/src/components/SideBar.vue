<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <!-- <img :src="logoURL" alt="Vue" /> -->
    </div>
    <div class="menu-toggle-wrap" @click="this.$router.push('/profiledoc/1')">
      <img src="@/assets/Albert.jpeg" alt="" style="border-radius: 50%; height: 60px; width: 60px;">
      {{  }} {{  }}
      <!-- <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button> -->
    </div> 

    <h3>Menu</h3>
    <div class="menu">
      <router-link to="/analytics" class="button">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link to="/patients" class="button">
        <span class="material-icons">people</span>
        <span class="text">Patients</span>
      </router-link>
      <router-link to="/appointments" class="button">
        <span class="material-icons">today</span>
        <span class="text">Appointments</span>
      </router-link>
      
    </div>

    <div class="flex"></div>

    <div class="menu">
      <div @click="logout" class="button">
        <span class="material-icons">logout</span>
        <span class="text">Log out</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/logo.png'
import { useRouter } from 'vue-router'

const router = useRouter()

const is_expanded = ref(localStorage.getItem('is_expanded') === 'true')


const logout=()=>{
  localStorage.removeItem('id')
  localStorage.removeItem('token')
  localStorage.removeItem('role')
  router.push('/')
}

</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;

  background-color: #2a4b66;
  color: var(--light);

  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  position:fixed;
  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
      height: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
    margin-top: 50px;
    position: relative;
    top: 100px;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: #00cec8;
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    cursor:pointer
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: rgba(0, 206, 200, 0.1); /*var(--dark-alt);*/

        .material-icons,
        .text {
          color: #00cec8;
        }
      }

      &.router-link-exact-active {
        background-color: rgba(0, 206, 200, 0.1);
        border-right: 5px solid #00cec8;

        .material-icons,
        .text {
          color: #00cec8;
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>

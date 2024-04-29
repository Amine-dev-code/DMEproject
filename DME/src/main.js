import { createApp, VueElement } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'leaflet/dist/leaflet.css';
import App from './App.vue'
import LoginPage from './views/LoginPage.vue'
import LandingPage from './views/LandingPage.vue'

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/', component: LandingPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

createApp(App).use(router).mount('#app');


import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import ClinicPage from '@/views/clinicPage.vue'
import LoginPage from '@/views/LoginPage.vue' // Assuming LoginPage.vue is located in the 'views' directory
import HomeDash from '../views/doctor/HomeDash.vue'
import PatientsDash from '@/views/doctor/PatientsDash.vue'
import AppointmentsDash from '@/views/doctor/AppointmentsDash.vue'
import AppointmentData from '@/views/doctor/AppointmentData.vue'
const routes= [
  {
    path: '/',
    name: 'home',
    component: ClinicPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: HomeDash
  },
  {
    path: '/patients',
    name: 'patients',
    component: PatientsDash
  },
  /*{
    path: '/patient/:id',
    name: 'patient',
    component: PatientProfile,
    props: true
  }*/
  {
    path: '/appointments',
    name: 'appointments',
    component: AppointmentsDash
  },
  {
    path: '/appointment/:id',
    name: 'appointment',
    component: AppointmentData,
    props: true
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
  
})

export default router

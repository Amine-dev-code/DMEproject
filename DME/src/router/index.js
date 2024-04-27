import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import LoginPage from '@/LoginPage.vue'
import HomeDash from '@/views/doctor/HomeDash.vue'
import PatientsDash from '@/views/doctor/PatientsDash.vue'
import AppointmentsDash from '@/views/doctor/AppointmentsDash.vue'
import PatientProfile from '@/components/PatientProfile.vue'
import AppointmentData from '@/views/doctor/AppointmentData.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
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
    {
      path: '/patient/:id',
      name: 'patient',
      compononet: PatientProfile,
      props: true
    },
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
})

export default router

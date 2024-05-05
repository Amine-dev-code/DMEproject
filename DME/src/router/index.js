import { createRouter, createWebHistory } from 'vue-router'

import ClinicPage from '@/views/clinicPage.vue'
import LoginPage from '@/views/LoginPage.vue' // Assuming LoginPage.vue is located in the 'views' directory
import DashBoard from '../views/doctor/DashBoard.vue'
import PatientsDash from '@/views/doctor/PatientsDash.vue'
import AppointmentsDash from '@/views/doctor/AppointmentsDash.vue'
import AppointmentData from '@/views/doctor/AppointmentData.vue'
import AnalyticsDash from '@/views/doctor/AnalyticsDash.vue'
import SignUp from '@/components/SignUp.vue'
import PatientProfile from '@/views/PatientProfile.vue'
import PatientHome from '@/views/patient/PatientHome.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: ClinicPage
  },
  {
    path: '/#doctors',
    name: 'doctors',
    component: ClinicPage

  },
  {
    path: '/#appointment',
    name: 'guest-appointment',
    component: ClinicPage

  },
  {
    path: '/#aboutus',
    name: 'about-us'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard
  },
  {
    path: '/patients',
    name: 'patients',
    component: PatientsDash
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: AnalyticsDash
  },
  /*{
    path: '/patient/:id',
    name: 'patient',
    component: PatientProfile,
    props: true
  }*/
  {
    path: '/patients/addpatient',
    name: 'addpatient',
    component: SignUp
  },
  {
    path: '/appointments/addappointment',
    name: 'addappointment',
    component: AppointmentData
  },
  {
    path: '/appointments',
    name: 'appointments',
    component: AppointmentsDash
  },
  {
    path: '/appointments/appointment/:id',
    name: 'appointment',
    component: AppointmentData,
    props: true
  },{
    path:'/addPatient',
    name:'addPatient',
    component:SignUp
  },
  {
  path: '/patients/patient/:_id',
    name: 'patient-profile',
    component: PatientProfile
  },
  {
    path: '/patient/:id',
    name: 'patient',
    component: PatientHome,
    props: true
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

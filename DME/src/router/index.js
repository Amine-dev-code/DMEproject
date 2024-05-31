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
import appointmentPatientDash from '@/views/patientRoles/appointmentsPatientDash.vue'
import medicalRecord from '@/views/patientRoles/medicalRecord.vue'
import profile from '../views/patient/profile.vue'
import porfiledoc from '../views/doctor/profiledoc.vue'
import {isAdmin,isUser} from '../../middleware.js'
 function Auth(to, from, next) {
  let auth=window.localStorage.getItem('token');
   // For example, check if the user has the 'admin' role in your authentication state.
   if (auth) {
     router.go(-1); // Proceed to the next route.
   } 
   else{
      return next();
   }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: ClinicPage,

    
  },
  {
    path: '/#doctors',
    name: 'doctors',
    component: ClinicPage,
    

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
    component: LoginPage,
   beforeEnter:Auth
    
  },
  
  {
    path: '/patients',
    name: 'patients',
    component: PatientsDash,
    beforeEnter:isAdmin

  },
  {
    path: '/analytics',
    name: 'analytics',
    component: AnalyticsDash,
    beforeEnter:isAdmin
  },
  
 
  {
    path: '/appointments/addappointment',
    name: 'addappointment',
    component: AppointmentData,
    beforeEnter:isAdmin
  },
  {
    path: '/appointments',
    name: 'appointments',
    component: AppointmentsDash,
    beforeEnter:isAdmin
  },
  {
    path: '/appointments/appointment/:id',
    name: 'appointment',
    component: AppointmentData,
    props: true,
    beforeEnter:isAdmin
  },
  {
    path:'/addPatient',
    name:'addPatient',
    component:SignUp,
    beforeEnter:isAdmin
  },
  {
    path: '/patients/patient/:id',
    name: 'patient-profile',
    component: PatientProfile,
    props:true,
    beforeEnter:isAdmin
  },
  {
    path: '/patient-profile',
    name: 'patient-profile-card',
    component: profile,
    props: true,
    beforeEnter:isUser
  },
  {
    path: '/patientHome',
    name: 'patient',
    component: PatientHome,
    beforeEnter:isUser
  },
  
  {
    path: '/profiledoc/:id',
    anme: 'doc-profile',
    component: porfiledoc,
    props: true,
    beforeEnter:isAdmin
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

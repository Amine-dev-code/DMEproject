<template>
  <div class="toSetSide">
    <SideBar/>
    <div class="container">
      <PatientProfileCard :user="user" />
      <AppointmentHistory :user="user" />
    </div>
</div>
</template>
<script>
import PatientProfileCard from '@/components/PatientProfileCard.vue'
import AppointmentHistory from '@/components/AppointmentHistory.vue'
import SideBar from '@/components/SideBar.vue';
import moment from 'moment'
export default {
  props:['id'],
  components: {
    PatientProfileCard,
    AppointmentHistory,
    SideBar
  },
  data(){
    return{
      user:{}
    }
  },
  methods:{
    async fetchUserInfo(){
      try{
        console.log(this.id)
        const res=await fetch (`http://localhost:3000/api/patientInfo/${this.id}`)
        const data= await res.json();
        this.user=data.infos
        this.user.patient_profile.date=moment(data.infos.patient_profile.date).format('MMMM Do YYYY');

      }catch(error){
        console.log(error) 
      }
    }
  },
  async created(){
    
   await this.fetchUserInfo()
    console.log(this.user)
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 20px;
  justify-content: unset;
  margin:20px;
  margin-left:270px
}
.toSetSide{
  display:flex;
  justify-content:flex-start
}
</style>

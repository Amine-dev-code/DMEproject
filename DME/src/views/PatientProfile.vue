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
import AppointmentHistory from '@/components/AppointmentHistory.vue';
import SideBar from '@/components/SideBar.vue';
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
        const res=await fetch ('http://localhost:3000/api/patientInfo/663256774c6f6946ca1c6c03')
        const data= await res.json();
        this.user=data.infos

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

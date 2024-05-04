<template>
    <div class="profile-preview-container">
        <div style="display: flex; flex-direction: column;">
            <p class="name">
                full name: 
            </p>
            <p class="gender">
                gender: 
            </p>
            <p class="blood">
                blood type: 
            </p>
            <p class="birthday">
                birth date: 
            </p>
            <p class="phone">
                phone number: 
            </p>
            <p class="address">
                medical background
            </p>
        </div>
        <div style="display: flex; flex-direction: column;">
            <p>
                {{ first_name }} {{ last_name }}
            </p>
            <p>
                {{ gender }} 
            </p>
            <p>
                {{ blood_type }}
            </p>
            <p>
                {{ birth_date }}
            </p>
            <p>
                {{ phone_number  }}
            </p>
            <p>
                {{ medical_background }}
            </p>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    props: ['patient'],
    data(){
    return{
    first_name:'',
    last_name:'',
    gender:'',
    blood_type:'',
    birth_date:'',
    phone_number:'',
    medical_background:[],

    }
  },
  methods:{
    async fetchUserProfile(){
      try{
        this.first_name=this.patient.first_name;
        this.last_name=this.patient.last_name;
        this.gender=this.patient.gender;
        this.birth_date=moment(this.patient.patient_profile.date).format('MMMM Do YYYY');
        this.phone_number=this.patient.patient_profile.phone_number;
        this.medical_background=this.patient.patient_profile.medical_background
        //console.log(data)

      }catch(error){
        console.log(error.message)
      }
    }
  },
  async created(){
    this.fetchUserProfile()
  }
    
}
</script>
<style>
.profile-preview-container {
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    width: 20vw; 
    background-color: white; 
    border-radius: 10px; 
    border: 2px  solid #00cec8; 
    padding: 10px ; 
    color : #2a4b66;
    height: min-content;
}
</style>
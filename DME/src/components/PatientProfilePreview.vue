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
                diagnosises
            </p>
            <p class="address">
                surgeries
            </p>
            <p class="address">
                allergies
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
                {{ diagnosises }}
            </p>
            <p>
                {{surgeries  }}
            </p>
            <p>
                {{ allergies }}
            </p>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    props: ['patientId'],
    data(){
    return{
    first_name:'',
    last_name:'',
    gender:'',
    blood_type:'',
    birth_date:'',
    phone_number:'',
    diagonsises:[],
    surgeries:[],
    allergies:[]
    }
  },
  methods:{
    async fetchUserProfile(){
      try{//http://localhost:3000/api/patientInfo/663256774c6f6946ca1c6c03
        const res = await fetch('http://localhost:3000/api/patientInfo/663256774c6f6946ca1c6c03')
        const data = await res.json()
        console.log(data)
        this.first_name=data.infos.first_name;
        this.last_name=data.infos.last_name;
        this.gender=data.infos.gender;
        this.blood_type=data.infos.patient_profile.blood_type
        this.birth_date=moment(data.infos.patient_profile.date).format('MMMM Do YYYY');
        this.phone_number=data.infos.patient_profile.phone_number;
        this.allergies=data.infos.patient_profile.allergies;
        this.diagonsises=data.infos.patient_profile.diagnosises;
        this.surgeries=data.infos.patient_profile.surgeries;
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
<style scoped>
.profile-preview-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 20vw;
  background-color: white;
  border-radius: 10px;
  border: 2px solid #00cec8;
  padding: 10px;
  color: #2a4b66;
  height: min-content;
}
</style>

<template>
  <div>
    <form action="" class="guest-form-container" @submit.prevent="handleSubmition">
      <div class="element">
        <label for="name">Full name</label>
        <input type="text" name="name" v-model="bookAppointment.full_name" />
      </div>
      <div class="element">
        <label for="phone">Phone number</label>
        <input required type="tel" v-model="bookAppointment.phone" />
      </div>
      <div class="element">
        <label for="email">Email</label>
        <input required type="email" v-model="bookAppointment.email" @keyup.enter="validateEmail"/>
      </div>
      <div class="last-row" style="display: flex; flex-direction: row;">
        <div class="element">
          <label for="doctor">Pick a doctor</label>
          <select name="doctor"  v-model="selectedDoctorID">
            <option>pick a doctor</option>
            <option v-for="doctor in doctors" id="chosenDoctor" :key="doctor._id" :value="doctor._id" >
              {{ doctor.first_name }} {{ doctor.last_name }}
            </option>
          </select>
        </div>
        <div class="">
          <label for="date">Date</label>
          <input type="date" name="date" v-model="bookAppointment.visit_date" class="date" />
        </div>
        <!-- <div v-if="youcan" class="showokMessage">
          <h5>{{ this.okmessage }}</h5>
        </div>
        <div v-else>
          <h5>{{ this.nomessage }}</h5>
        </div> -->
      </div>
      <div class="btn-container">
        <button class="book-btn" @click.prevent="bookAppointmente">Book appointment</button>
        <button class="book-btn" @click.prevent="handleDateClick">Check</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

const validateEmail = (event) => {
  const isPatternValid = !!event.this.email.match('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2, 4}$')
  console.log(isPatternValid)
}
export default {
  data() {
    return {
      phone: '',
      email: '',
      doctors: [],
      okmessage:'',
      nomessage:'',
      youcan:false,
      bookAppointment:{
        full_name:'',
        email:'',
        phone:null,
        visit_date:''
      },
      selectedDoctorID:null
    }
  },
  methods: {
    async fetchDoctors(){
      try{
        const res=await fetch ('http://localhost:3000/api/getDoctors')
        const data= await res.json();
        this.doctors=data;
      }catch(error){
        console.log(error.message)
      }
    },
    async handleDateClick(){
      try{
        const checkAppointment={
          visit_date:this.bookAppointment.visit_date
        };
        const res=await fetch (`http://localhost:3000/api/checkDisponibleAppointment/${this.selectedDoctorID}`,{
          method:'post',
          body:JSON.stringify(checkAppointment),
          headers:{
          'content-type': 'application/json',
        }
        });
        const data=await res.json()
        console.log(data)
        if(data.status=='success'){
          this.youcan=true
          this.okmessage=data.message
          
        }
        else{
         this.nomessage=data.message
        
        }
      }catch(error){
        console.log(error)
      }
    },
    async bookAppointmente(){
    try{
      const res=await fetch (`http://localhost:3000/api/postAppointment/${this.selectedDoctorID}`,{
          method:'post',
          body:JSON.stringify(this.bookAppointment),
          headers:{
          'content-type': 'application/json',
        }
        });
      this.bookAppointment.full_name='';
      this.bookAppointment.email='';
      this.bookAppointment.phone=null;
      this.bookAppointment.visit_date=''
    }catch(error){
      console.log(error)
    }
  },
 
  },
  
  async created(){
    await this.fetchDoctors()
  }
}
</script>

<style>
.guest-form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 30vw;
  height: min-content;
  align-items: center;
}
.guest-form-container input::placeholder {
  padding-left: 10px;
  color: rgba(0, 206, 200, 0.5);
}
.guest-form-container input {
  padding-left: 10px;
  font-size: 14px;
}
.guest-form-container label {
  color: #2a4b66;
}
.element {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.element > input,
.date {
  height: 40px;
  border-radius: 5px;
  border: 2px solid rgba(0, 206, 200, 0.5);
}
.element > select {
  height: 40px;
  border-radius: 5px;
  border: 2px solid rgba(0, 206, 200, 0.5);
  width: 15vw;
  padding-left: 10px;
}
.element > input {
  width: 30vw;
}
.book-btn {
  height: 40px;
  width: 15vw;
  color: white;
  background-color: rgba(67, 106, 230, 1);
  border-radius: 5px;
  border: none;
  font-size: 16px;
  margin-top: 15px;
}
.book-btn:hover {
  background-color: rgba(67, 106, 230, 0.8);
}
.book-btn:active {
  background-color: rgba(67, 106, 230, 0.5);
}
.last-row {
  width: 31vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.last-row > div {
  display: flex;
  flex-direction: column;
  width: 15vw;
  gap: 5px;
}
.last-row > div > select {
  /*margin-top: 10px;*/
  height: 44px;
}
.last-row > div > input {
  /*margin-top: 10px;*/
  height: 44px;
}
.showokMessage{

}
.btn-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 18px;
}
</style>

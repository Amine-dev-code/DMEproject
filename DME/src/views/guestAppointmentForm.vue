<template>
  <div>
    <form action="" class="guest-form-container" @submit.prevent="handleSubmition">
      <div class="element">
        <label for="name">Full name</label>
        <input required type="text" name="name" v-model="bookAppointment.full_name" >
      </div>
      <div class="element">
        <label for="phone">Phone number</label>
        <input type="tel" v-model="bookAppointment.phone" />
      </div>
      <div class="element">
        <label for="email">Email</label>
        <input type="email" v-model="bookAppointment.email" @keyup.enter="validateEmail"/>
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
          <input type="date" name="date" :min="minDate" v-model="bookAppointment.visit_date" class="date" required>
        </div>
        
      </div>
      <div v-if="youcan" class="showokMessage">
          <h5>{{ this.okmessage }}</h5>
        </div>
        <div v-else>
          <h5>{{ this.nomessage }}</h5>
        </div> 
      <div class="btn-container">
        <button class="book-btn" :disabled='isDisabled'  @click.prevent="validate">Book appointment</button>
        <button class="book-btn"  @click.prevent="handleDateClick">Check</button>
      </div>
    </form>
  </div>
</template>

<script>
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
      selectedDoctorID:null,
      minDate:null,
      isDisabled:true
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
          this.isDisabled=false;
         
        }
        else{
         this.nomessage=data.message
        
        }
      }catch(error){
        console.log(error)
      }
    },
    validate() {
      let valid = true ;
      if(this.bookAppointment.full_name == '') {
        alert("please enter your full name")
        valid = false
      }
      if(this.bookAppointment.phone == '') {
        alert("please enter your phone number")
        valid = false
      }
      if(this.bookAppointment.email == '') {
        alert("please enter your email")
        valid = false
      }
      if(this.bookAppointment.selectedDoctorID == '') {
        alert("please select a doctor")
        valid = false
      }
      if(this.bookAppointment.visit_date == '') {
        alert("please select a date")
        valid = false
      }
      if(valid) {
        this.bookAppointmente()
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
        alert('appointment booked suuccessfully')
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
    const currentDate = new Date();
  
  
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
  const day = String(currentDate.getDate()).padStart(2, '0');
  
  
  this.minDate = `${year}-${month}-${day}`;
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
.book-btn:disabled {
  background-color: rgba(67, 106, 230, 0.5); /* Adjust opacity or color for disabled state */
  cursor: not-allowed; /* Change cursor for disabled state */
  /* Add any other styles for disabled state */
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
/*.showokMessage{

}*/
.btn-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 18px;
}
</style>

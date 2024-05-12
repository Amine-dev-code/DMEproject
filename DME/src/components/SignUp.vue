<template>
  <div class="tpSetSide">
    <SideBar/>
  <div class="signup-container">
    <h1 class="form-header">Patient Profile Creation</h1>
    <form @keypress.enter.prevent="$event.stopPropagation()" action="" class="signup-form">
      <div class="general-info">
        <input
          class="half input-style"
          type="text"
          name="first-name"
          placeholder="first name"
          v-model="newPerson.first_name"
          required
        />
        <input
          type="text"
          placeholder="family name"
          name="family-name"
          class="input-style"
          v-model="newPerson.last_name"
          required
        />
        <div class="birthday">
          <select name="" class="day" id="day" v-model="day" required>
            <option value="">Day</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <select name="" id="month" class="month" v-model="month" required>
            <option value="">Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select  name="" id="year" class="year" v-model="year" required>
            <option value="">Year</option>
            <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
          </select>
        </div>
        <select  class="input-style" placeholder="gender" v-model="newPerson.gender" required>
          <option value="">Select gender </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <div class="body-info">
          
          <select class="blood-type" v-model="newPerson.patient_profile.blood_type" required>
            <option value="">Select blood type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
      </div>
      <hr />
      <div class="contact-info">
        <input
          class="number input-style"
          type="tel"
          placeholder="number"
          v-model="newPerson.patient_profile.phone_number"
          required
        />
        <input
          class="email input-style"
          type="email"
          placeholder="email"
          v-model="newPerson.email"
          required
        />
        <input
          class="password input-style"
          type="password"
          placeholder="password"
          v-model="newPerson.password"
          required
        />
        <input
          class="password input-style"
          type="password"
          placeholder="confirm password"
          v-model="confPassword"
          required
        />
        <input
          class="address input-style"
          type="text"
          placeholder="address"
          v-model="newPerson.patient_profile.address.detail"
          required
        />
        <select id="wilaya" name="wilaya" class="state" v-model="newPerson.patient_profile.address.wilaya" required>
          <option value="">Select wilaya</option>
          <option value="Adrar">Adrar</option>
          <option value="Chlef">Chlef</option>
          <option value="Laghouat">Laghouat</option>
          <option value="Oum El Bouaghi">Oum El Bouaghi</option>
          <option value="Batna">Batna</option>
          <option value="Béjaïa">Béjaïa</option>
          <option value="Biskra">Biskra</option>
          <option value="Béchar">Béchar</option>
          <option value="Blida">Blida</option>
          <option value="Bouira">Bouira</option>
          <option value="Tamanrasset">Tamanrasset</option>
          <option value="Tébessa">Tébessa</option>
          <option value="Tlemcen">Tlemcen</option>
          <option value="Tiaret">Tiaret</option>
          <option value="Tizi Ouzou">Tizi Ouzou</option>
          <option value="Alger">Alger</option>
          <option value="Djelfa">Djelfa</option>
          <option value="Jijel">Jijel</option>
          <option value="Sétif">Sétif</option>
          <option value="Saida">Saïda</option>
          <option value="Skikda">Skikda</option>
          <option value="Sidi Bel Abbès">Sidi Bel Abbès</option>
          <option value="Annaba">Annaba</option>
          <option value="Guelma">Guelma</option>
          <option value="Constantine">Constantine</option>
          <option value="Médéa">Médéa</option>
          <option value="Mostaganem">Mostaganem</option>
          <option value="M'Sila">M'Sila</option>
          <option value="Mascara">Mascara</option>
          <option value="Ouargla">Ouargla</option>
          <option value="Oran">Oran</option>
          <option value="El Bayadh">El Bayadh</option>
          <option value="Illizi">Illizi</option>
          <option value="Bordj Bou Arréridj">Bordj Bou Arréridj</option>
          <option value="Boumerdès">Boumerdès</option>
          <option value="El Tarf">El Tarf</option>
          <option value="Tindouf">Tindouf</option>
          <option value="Tissemsilt">Tissemsilt</option>
          <option value="El Oued">El Oued</option>
          <option value="Khenchela">Khenchela</option>
          <option value="Souk Ahras">Souk Ahras</option>
          <option value="Tipaza">Tipaza</option>
          <option value="Mila">Mila</option>
          <option value="Aïn Defla">Aïn Defla</option>
          <option value="Naâma">Naâma</option>
          <option value="Aïn Témouchent">Aïn Témouchent</option>
          <option value="Ghardaïa">Ghardaïa</option>
          <option value="Relizane">Relizane</option>
        </select>
        <input class="city input-style" type="text" placeholder="city" v-model="newPerson.patient_profile.address.city" required />
      </div>
      <hr />
      <div class="health-info">
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;
          "
        >
          <input
            placeholder="Surgery"
            class="input-style"
            v-model="tempSurg"
            @keyup.enter="addSurgeries"
          />
          <div class="added-container" v-if="newPerson.patient_profile.surgeries.length > 0">
            <div class="added" v-for="surgery in newPerson.patient_profile.surgeries" :key="surgery">
              {{ surgery }}
            </div>
          </div>
        </div>
        <hr style="width: 300px" />
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;
          "
        >
          <input
            placeholder="Allergies"
            class="input-style"
            v-model="tempAllerg"
            @keyup.enter="addAllergies"
          />
          <div class="added-container" v-if="newPerson.patient_profile.allergies.length > 0">
            <div class="added" v-for="allergy in newPerson.patient_profile.allergies" :key="allergy">
              {{ allergy }}
            </div>
          </div>
        </div>
        <hr style="width: 300px" />
        <div>
          <div
            style="
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
              gap: 10px;
              margin-bottom: 10px;
              width: 30vw;
            "
          >
            <input
              placeholder="Diagnosis"
              class="input-style"
              v-model="tempDiag"
              @keyup.enter="addDiagnosis"
            />
            <div class="added-container" v-if="newPerson.patient_profile.diagnosises.length > 0">
              <div class="added" v-for="diagnosis in newPerson.patient_profile.diagnosises" :key="diagnosis">
                {{ diagnosis }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="create-patient-btn" type="submit" @click.prevent="validate">
        Create new patient
      </button>
    </form>
  </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
export default {
  components:{
    SideBar
  },
  data() {
    return {
      years:[],
      confPassword:'',
      day: '',
      month: '',
      year: '',
      blood: '',
      phone: '',
      tempSurg: '',
      tempAllerg: '',
      tempDiag: '',
      newPerson:{
        first_name:'',
        last_name:'',
        email:'',
        gender:'',
        password:'',
        patient_profile:{
          date:null,
          address:{
            wilaya: '',
            city: '',
            detail:''
          },
            allergies:[],
            surgeries:[],
            diagnosises:[],
            blood_type:'',
            phone_number:''
        }
      } 
    }
  },
  methods: {
    validate() {
      let valid = true
      if(this.newPerson.first_name == '') {
        alert("please enter a first name")
        valid = false
      } 
      if(this.newPerson.last_name == '') {
        alert("please enter a first name")
        valid = false
      } 
      if(this.newPerson.email == '') {
        valid = false
      }
      if(this.newPerson.patient_profile.phoner_number == '') {
        valid = false
      }
      if(this.newPerson.password == '') {
        valid = false
      }
      if(valid) {
        this.handleSubmit()
      }
    },
    addDiagnosis(event) {
      if (event.key === 'Enter' && this.tempDiag) {
        if (!this.newPerson.patient_profile.diagnosises.includes(this.tempDiag)) {
          this.newPerson.patient_profile.diagnosises.push(this.tempDiag)
        }
        this.tempDiag = ''
      }
    },
    addAllergies(event) {
      if (event.key === 'Enter' && this.tempAllerg) {
        if (!this.newPerson.patient_profile.allergies.includes(this.tempAllerg)) {
          this.newPerson.patient_profile.allergies.push(this.tempAllerg)
        }
        this.tempAllerg = ''
      }
    },
    addSurgeries(event) {
      if (event.key === 'Enter' && this.tempSurg) {
        if (!this.newPerson.patient_profile.surgeries.includes(this.tempSurg)) {
          this.newPerson.patient_profile.surgeries.push(this.tempSurg)
        }
        this.tempSurg = ''
      }
    },
    async handleSubmit() {
      try{
        const newYear=Number(this.year);
        const newMonth=Number(this.month)
        const newDay=Number(this.day)
        const date= new Date(newYear,newMonth-1,newDay+1);
        console.log(this.newPerson)
        this.newPerson.patient_profile.date=date;
        const res=await fetch ('http://localhost:3000/api/postPatient/66325051e0e2a989a8ca3cf4',{
          method:'post',
          body:JSON.stringify(this.newPerson),
          headers:{
          'content-type': 'application/json',
        }
        });
        const data=await res.json()
        if(data.status=='success'){
        const res=await fetch (`http://localhost:3000/api/addToOwnPatient/66325051e0e2a989a8ca3cf4/${data.patient._id}`,{
          method:'put',
        })
        const secdata=await res.json()
        if(secdata.status=='success')
          alert('new patient successfully added');
          this.$router.push({ 
           path: '/appointments/addappointment', 
           query: { patientId:JSON.stringify(data.patient._id)} 
             });
        }
      }catch(error){
        console.log(error)
      }
    },
   
  },
  created(){
    const nowYear=new Date().getFullYear();
    for(let year= nowYear ;year > 1950; year--){
      this.years.push(year)
    }
  }
}
</script>

<style scoped>
.signup-form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
hr {
  border: 1px solid rgba(67, 106, 230, 0.5);
  width: 40vw; /* Adjust the border style, width, and color */
  margin: 30px;
}
.input-style {
  width: 29.5vw;
  height: 40px;
  /*background-color: rgba(0, 206, 200, 0.1);*/
  border: 2px solid #00cec8;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 14px;
}
input:focus {
  outline:none;
}
.input-style::placeholder {
  color: rgba(67, 106, 230, 0.5);
  font-size: 14px;
}
/*.body-info > input::placeholder {
  color: rgba(67, 106, 230, 0.5);
  font-size: 14px;
}*/
.signup-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width:100%;
  overflow-y: auto;
  align-items: center;
  gap: 10px;
  padding: 20px; /* Add padding */
  margin-right: 120px;
}
.general-info {
  display: grid;
  grid-template-rows: 60px 60px 60px;
  grid-template-columns: 30vw 30vw;
  grid-column-gap: 10px;
}
.birthday {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-direction: row;
}
.body-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  grid-column-start: 1;
  grid-column-end: 3;
}
.blood-type {
  height: 47px;
  /*background-color: rgba(0, 206, 200, 0.1);*/
  border: 2px solid #00cec8;
  border-radius: 10px;
  width: 15vw;
  padding-left: 10px;
  color: rgba(67, 106, 230, 0.5);
}
.day,
.month,
.year {
  height: 47px;
  /*background-color: rgba(0, 206, 200, 0.1);*/
  border: 2px solid #00cec8;
  border-radius: 10px;
  width: 10vw;
  padding-left: 10px;
  color: rgba(67, 106, 230, 0.5);
}
.body-info > input {
  width: 15vw;
  height: 40px;
  /*background-color: rgba(0, 206, 200, 0.1);*/
  border: 2px solid #00cec8;
  border-radius: 10px;
}
.contact-info {
  justify-content: center;
  flex-direction: column;
  display: grid;
  grid-template-rows: 60px 60px 60px;
  grid-template-columns: 30vw 30vw;
  grid-column-gap: 10px;
}
.number {
  grid-column-start: 1;
  grid-column-end: 2;
}
.address,
.zip-code {
  grid-column-start: 1;
  grid-column-end: 3;
  width: 60.29vw;
}
.state {
  height: 47px;
  /*background-color: rgba(0, 206, 200, 0.1);*/
  border: 2px solid #00cec8;
  border-radius: 10px;
  width: 30vw;
  padding-left: 10px;
  color: rgba(67, 106, 230, 0.5);
}
.health-info {
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  align-items: center;
}

.form-header {
  text-align: center;
}
.create-patient-btn {
  width: 20vw;
  height: 40px;
  background-color: rgba(67, 106, 230, 1);
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-family: sans-serif;
  margin-bottom: 20px;
  padding: 10px;
}
.create-patient-btn:hover {
  background-color: rgba(67, 106, 230, 0.8);
}

.create-patient-btn:active {
  background-color: rgba(67, 106, 230, 0.4);
}
.radio-inline {
  display: inline-block; /* Makes the label behave like a block element */
}

.radio-inline input {
  margin-right: 5px;
}
.add-btn {
  width: 40px;
  height: 40px;
  text-align: center;
  background-color: rgba(67, 106, 230, 1);
  border: none;
  color: white;
  border-radius: 10px;
  font-size: larger;
  font-weight: bolder;
}
.added-container {
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 30vw;
  margin-top: 5px;
  flex: 1;
  row-gap: 5px;
}
.added {
  height: 30px;
  background-color: rgba(0, 206, 200, 0.1);
  color: rgba(0, 206, 200, 1);
  border-radius: 10px;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  width: 100%;
  flex: 1;
}
.toSetSide{
  display:flex;
  justify-content:space-between
}
</style>

<template>
  <div class="container" >
 
  <form>
    <div class="cell">
      <label>
        First name:
      </label>
      <p v-if="!isEdit">
        {{ user.first_name }}
      </p>
      <input v-else placeholder="" type="text" name="firstName" id="name" v-model="user.first_name"/>
    </div>
    <div>
      <label>
        Family name:
      </label>
      <p v-if="!isEdit">
        {{ user.last_name }} 
      </p>
      <input v-else placeholder="" type="text" name="familyName" v-model="user.last_name" />
    </div>
    <div>
      <label>
        Phone:
      </label>
      <p v-if="!isEdit">
        {{ user.patient_profile.phone_number }}
      </p>
      <input v-else placeholder="" type="tel" name="phone" v-model="user.patient_profile.phone_number"/>
    </div>
    <div>
      <label>
        Email:
      </label>
      <p v-if="!isEdit">
        {{ user.email }}
      </p>
      <input v-else placeholder="" type="email" name="email" v-model="user.email"/>
    </div>
    <div>
      <label>
       City:
      </label>
      <p v-if="!isEdit">
        {{ user.patient_profile.address.city }}
      </p>
      <input v-else placeholder="" type="text" name="city" v-model="user.patient_profile.address.city"/>
    </div>
    <div>
      <label>
        Wilaya:
      </label>
      <p v-if="!isEdit">
        {{ user.patient_profile.address.wilaya }}
      </p>
      <input v-else placeholder="" type="text" name="wilaya" v-model="user.patient_profile.address.wilaya"/>
    </div>
    
    <div>
      <label>
        Address:
      </label>
      <p v-if="!isEdit">
        {{ user.patient_profile.address.detail }}
      </p>
      <input v-else placeholder="" type="text" name="address" v-model="user.patient_profile.address.detail"/>
    </div>
  </form>
    <button v-if="!isEdit" class="edt-btn" @click="isEdit = true">
      Edit
    </button>
    <button v-else @click.prevent="updateUser" class="edt-btn">
      Submit
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isEdit: false,
        user: {
          first_name:'',
          last_name:'',
          email:'',
          patient_profile:{
            phone_number:'',
            address:{
              city:'',
              wilaya:'',
              detail:''
            }
          } 
        },
        
      };
    },
    methods:{
      async fetchpatientInfo(){
        try{
          const res= await fetch('http://localhost:3000/api/patientInfo/663bfdc4e37d44c57859c5a4');
          const data=await res.json()
          console.log(data)
          this.user.first_name=data.infos.first_name;
          this.user.last_name=data.infos.last_name;
          this.user.patient_profile.phone_number=data.infos.patient_profile.phone_number
          this.user.email=data.infos.email
          this.user.patient_profile.address.city=data.infos.patient_profile.address.city
          this.user.patient_profile.address.wilaya=data.infos.patient_profile.address.wilaya
          this.user.patient_profile.address.detail=data.infos.patient_profile.address.detail
          
        }catch(error){
          console.log(error)
        }
      },
      async updateUser(){
        this.isEdit=false
        try{//will be changed after to $id
          const res=await fetch ('http://localhost:3000/api/editPatient/663bfdc4e37d44c57859c5a4',{
          method:'put',
          body:JSON.stringify(this.user),
          headers:{
          'content-type': 'application/json',
        }
        })

        }catch(error){
          console.log(error)
        }
      }
    },
    async created(){
    await this.fetchpatientInfo()
    
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    color: rgba(67, 106, 230, 1);
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
  }
  .cell {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .container form {
    display: grid;
    grid-template-columns: repeat(2, 30vw);
    grid-template-rows: repeat(4, 90px);
    column-gap: 20px;
    row-gap: 20px;
    border: 2px solid rgba(67, 106, 230, 0.1);
    border-radius: 5px;
    padding: 20px 30px;
  }
  .container label {
    margin-bottom: 10px;
  }
  form > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: min-content;
  }
  form p {
    height: 40px;
    display: flex;
    align-items:center;
    padding-left: 10px;
    border-radius: 5px;
    border: 2px solid rgba(67, 106, 230, 0.1);
    font-size: 18px;
  }
  .container img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
  .edt-btn {
    width: 10vw;
    height: 40px;
    font-size: 18px;
    color: white;
    background-color: rgba(67, 106, 230, 1);
    border-radius: 5px;
  }
  .edt-btn:hover {
    background-color: rgba(67, 106, 230, 0.8);
  }
  .edt-btn:active {
    background-color: rgba(67, 106, 230, 0.5);
  }
  .active {
    background-color: rgba(67, 106, 230, 0.5);
  }
  form input {
    height: 40px;
    border-radius: 5px;
    border: 2px solid rgba(67, 106, 230, 0.2) ;
    color: black;
    padding-left: 10px;
    font-size: 18px;
    background-color: rgba(67, 106, 230, 0.01) ;
    color: #2a4b66;
  }
  form input:active {
    border: 2px solid  rgba(67, 106, 230, 0.5) ;
  }
</style>
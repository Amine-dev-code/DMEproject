<template>
  <div class="container">
  <img src="@/assets/Albert.jpeg">
  <form @submit="">
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
        {{ user.family_name }} 
      </p>
      <input v-else placeholder="" type="text" name="familyName" v-model="user.family_name" />
    </div>
    <div>
      <label>
        Phone:
      </label>
      <p v-if="!isEdit">
        {{ user.phone }}
      </p>
      <input v-else placeholder="" type="tel" name="phone" v-model="user.phone"/>
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
        {{ user.city }}
      </p>
      <input v-else placeholder="" type="text" name="city" v-model="user.city"/>
    </div>
    <div>
      <label>
        Wilaya:
      </label>
      <p v-if="!isEdit">
        {{ user.wilaya }}
      </p>
      <input v-else placeholder="" type="text" name="wilaya" v-model="user.wilaya"/>
    </div>
    <div>
      <label>
        Zip code:
      </label>
      <p v-if="!isEdit">
        {{ user.zipcode }}
      </p>
      <input v-else placeholder="" type="text" name="zip-code" v-model="user.zipcode"/>
    </div>
    <div>
      <label>
        Address:
      </label>
      <p v-if="!isEdit">
        {{ user.address }}
      </p>
      <input v-else placeholder="" type="text" name="address" v-model="user.address"/>
    </div>
  </form>
    <button v-if="!isEdit" class="edt-btn" @click="isEdit = true">
      Edit
    </button>
    <button v-else @click.prevent="isEdit = false" class="edt-btn">
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
          first_name:'idir',
          family_name:'ould khaoua',
          phone:'za za za za za',
          email:'someFuckingEmail@gmail.com',
          city:'El eulma',
          wilaya:'Setif',
          zipcode:'19600',
          address:'some fucking address'
        }
      };
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
    justify-content: center;
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
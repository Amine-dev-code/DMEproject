<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" class="LoginForm">
        <input class="Input" type="email" name="email" placeholder="example@email.com" v-model="email" >
        <p style="margin: 0; font-family: sans-serif; color: rgba(67, 106, 230, 0.5)">or enter</p>
        <input class="Input" type="tel" name="phone" placeholder="e.g. 05 12 34 56 78" v-model="phone" >
        <input
          class="Input"
          type="password"
          name="password"
          placeholder="enter your password"
          required
          v-model="password"
        />
        <button class="lgn-btn">Login</button>
    </form>
    <div class="logindiv">
      <img src="../assets/login.svg" alt="" class="loginimg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      phone: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log("form submitted");
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
}

.logindiv {
  flex: 1;
  height: 100vh;
}

.LoginForm {
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Input {
  width: 20vw;
  margin: 10px;
}
.Input::placeholder {
  text-align: center;
  color: rgba(67, 106, 230, 0.5);
}
.lgn-btn {
  margin-top: 30px;
  background-color: #436ae6;
  color: white;
  width: 10vw;
  height: 35px;
  border-radius: 5px;
  border: 0;
  font-size: 20px;
}
.lgn-btn:hover {
  background-color: rgba(67, 106, 230, 0.85);
}
.lgn-btn:active {
  background-color: rgba(67, 106, 230, 0.5);
}
</style>

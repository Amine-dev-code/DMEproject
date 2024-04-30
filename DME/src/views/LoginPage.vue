<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" class="LoginForm">
      <input
        class="login-input"
        type="email"
        name="email"
        placeholder="example@email.com"
        v-model="email"
      />
      <input
        class="login-input"
        type="password"
        name="password"
        placeholder="enter your password"
        required
        v-model="password"
      />
      <button class="lgn-btn">Login</button>
    </form>
    <img src="../assets/login.svg" alt="" class="loginimg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log('form submitted')
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

.LoginForm {
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Input::placeholder {
  text-align: center;
  color: rgba(67, 106, 230, 0.5);
}
.lgn-btn {
  margin-top: 20px;
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
.loginimg {
  height: 100vh;
}
.login-input {
  height: 40px;
  width: 20vw;
  border: 2px solid rgba(0, 206, 200, 0.5);
  border-radius: 5px;
  padding-left: 10px;
  color: rgba(42, 75, 102, 1);
  font-size: 14px;
  margin-bottom: 10px;
}
.login-input::placeholder {
  color: rgba(67, 106, 230, 0.5);
}
</style>

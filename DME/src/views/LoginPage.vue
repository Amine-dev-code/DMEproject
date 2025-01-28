<template>
  <h1 class="header">
    Login Page
  </h1>
  <div class="container">
    <form @submit.prevent="login" class="LoginForm">
      <input
        class="login-input"
        type="email"
        name="email"
        placeholder="example@email.com"
        v-model="credentials.email"
        required
      />
      <input
        class="login-input"
        type="password"
        name="password"
        placeholder="enter your password"
        required
        v-model="credentials.password"
      />
      <h3 class="styling">{{ error }}</h3>
      <button class="lgn-btn">Login</button>
    </form>
    <img src="../assets/login.svg" alt="" class="loginimg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials:{
        email: '',
        password: ''
      },
      error:''

    }
  },
  methods: {
    async login() {
      try{
        const res=await fetch ('http://localhost:3000/api/login',{
          method:'post',
          body:JSON.stringify(this.credentials),
          headers:{
          'content-type': 'application/json',
        }
        })
        const data=await res.json()
        if(data.status=='success'){
          localStorage.setItem('id',data.foundUser._id)
          localStorage.setItem('role',data.foundUser.role)
          localStorage.setItem('token',data.Token)
          if(data.foundUser.role=='doctor'){
            this.$router.push('/analytics')
          }
            else{
              this.$router.push('/patientHome')
              const userId=localStorage.getItem('id');
              this.$socket.emit('registerUser', userId);
            }
          
        }
        
      }catch(error){
       console.log(error)

      this.error='invalid email or password'
        
      }
    }
  }
}
</script>

<style scoped>
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
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100px;
  color: rgba(42, 75, 102, 1);
  width: 100%;
  font-weight: normal;
  font-size: 44px;
}
input:focus {
  outline: none;
}
.styling{
  color:red
}
</style>

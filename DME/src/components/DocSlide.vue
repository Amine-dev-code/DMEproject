<template>
  <!-- No original code provided, so I'll create a basic example -->
<div class="container" v-if="loadedData">
  <div class="side left" @click="left" :class="{ 'transition': isTransitioning }">
  
    <h1>
      {{ doctors[lindex].first_name }}
    </h1>
    <p>
      Speciality: {{ doctors[lindex].doctor_profile.speciality }}
    </p>
    <p>
      Desk: {{ doctors[lindex].doctor_profiledesk }}
    </p>
    <p>
      price : {{ doctors[lindex].doctor_profile.price }}
    </p>
  </div>
  <div class="middle">
    
    <h1>
      {{ doctors[mindex].first_name }} 
    </h1>
    <p>
      Speciality: {{ doctors[mindex].doctor_profile.speciality }}
    </p>
    <p>
      Desk: {{ doctors[mindex].doctor_profile.desk }}
    </p>
    <p>
      price : {{ doctors[mindex].doctor_profile.price }}
    </p>
  </div>
  <div class="side right" @click.prevent="right" :class="{ 'transition': isTransitioning }">
    <h1>
      {{ doctors[rindex].first_name }}
    </h1>
    <p>
      Speciality: {{ doctors[rindex].doctor_profile.speciality }}
    </p>
    <p>
      Desk: {{ doctors[rindex].doctor_profile.desk }}
    </p>
    <p>
      price : {{ doctors[rindex].doctor_profile.price }}
    </p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isTransitioning: false,
      lindex: 0,
      mindex: 1,
      rindex: 2,
      doctors: [],
      loadedData:false
    };
  },
  methods: {
    right() {
      this.isTransitioning = true;
      setTimeout(() => {
        this.lindex = (this.lindex + 1) % this.doctors.length;
        this.mindex = (this.mindex + 1) % this.doctors.length;
        this.rindex = (this.rindex + 1) % this.doctors.length;
        this.isTransitioning = false;
      }, 300);
  },
  left() {
      this.isTransitioning = true;
      setTimeout(() => {
        this.lindex = (this.lindex - 1 + this.doctors.length) % this.doctors.length;
        this.mindex = (this.mindex - 1 + this.doctors.length) % this.doctors.length;
        this.rindex = (this.rindex - 1 + this.doctors.length) % this.doctors.length;
        this.isTransitioning = false;
      }, 300);
  },
  async fetchDoctors(){
    try{
        const res=await fetch ('http://localhost:3000/api/getDoctors')
        const data= await res.json();
        this.doctors=data
        console.log(data)
    }catch(error){
      console.log(error)
    }
  },
  },
  
  async created(){
    await this.fetchDoctors()
    this.loadedData=true;

  }
}
</script>

<style scoped>
/* Improved CSS styles */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
.container div {
  border-radius: 5px;
}
.side {
  width: 150px; /* 20% of the container width */
  height: 400px; /* 80% of the middle div's height */
  background-color: #fff; /* add a background color to see the divs */
  opacity: 0.5 ;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
  padding: 10px;
  transition: transform 0.3s ease;
}
.left {
  transform: translateX(20%); /* tuck under the middle div */
}
.right {
  transform: translateX(-20%); /* tuck under the middle div */
}
.middle {
  width: 300px; /* 60% of the container width */
  height: 400px; /* full height of the container */
  background-color: white; /* add a background color to see the divs */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* add a box shadow to make it pop */
  z-index: 1; /* bring it to the front */
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
  padding: 10px;
}
.middle > img {
  height: auto;
  width: 200px;
}
.side > img {
  height: auto;
  width: 100px;
}
.transition {
  pointer-events: none; /* Disable clicks during transition */
}
</style>
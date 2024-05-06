<template>
  <!-- No original code provided, so I'll create a basic example -->
<div class="container">
  <div class="side left" @click="left">
    <img :src="getImg(doctors[lindex].img)" alt="">
    <h1>
      {{ doctors[lindex].name }}
    </h1>
    <p>
      Speciality: {{ doctors[lindex].specialty }}
    </p>
    <p>
      Desk: {{ doctors[lindex].desk }}
    </p>
    <p>
      price : {{ doctors[lindex].price }}
    </p>
  </div>
  <div class="middle">
    <img :src="getImg(doctors[mindex].img)" alt="">
    <h1>
      {{ doctors[mindex].name }}
    </h1>
    <p>
      Speciality: {{ doctors[mindex].specialty }}
    </p>
    <p>
      Desk: {{ doctors[mindex].desk }}
    </p>
    <p>
      price : {{ doctors[mindex].price }}
    </p>
  </div>
  <div class="side right" @click.prevent="right">
    <img :src="getImg(doctors[rindex].img)" alt="">
    <h1>
      {{ doctors[rindex].name }}
    </h1>
    <p>
      Speciality: {{ doctors[rindex].specialty }}
    </p>
    <p>
      Desk: {{ doctors[rindex].desk }}
    </p>
    <p>
      price : {{ doctors[rindex].price }}
    </p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      lindex: 0,
      mindex: 1,
      rindex: 2,
      doctors: [
        {
          name: 'dr tenma',
          specialty: 'surgeon',
          img: 'doc-1.png',
          desk: 'desk 9',
          price: '1 million dollars'
        },
        {
          name: 'dr boyer',
          specialty: 'surgeon',
          img: 'doc-2.png',
          desk: 'desk 0',
          price: '1 dollars'
        },
        {
          name: 'dr heinnemann',
          specialty: 'chief',
          img: 'doc-3.png',
          desk: 'desk 1',
          price: '1 million DA'
        },
      ]
    };
  },
  methods: {
    getImg(img) {
      return new URL(`../assets/${img}`,  import.meta.url)
    },
    right() {
    // Update indices to shift to the right
    this.lindex = (this.lindex + 1) % this.doctors.length;
    this.mindex = (this.mindex + 1) % this.doctors.length;
    this.rindex = (this.rindex + 1) % this.doctors.length;
  },
  left() {
    // Update indices to shift to the left
    this.lindex = (this.lindex - 1 + this.doctors.length) % this.doctors.length;
    this.mindex = (this.mindex - 1 + this.doctors.length) % this.doctors.length;
    this.rindex = (this.rindex - 1 + this.doctors.length) % this.doctors.length;
  }
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
</style>
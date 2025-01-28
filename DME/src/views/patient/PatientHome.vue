<template>
  <div class="container">
    <div @click="updateStatus" class="notifications">
      <div style="position: relative;">
        <img class="image" src="@/assets/no-notification.png" alt="" @click="opening">
        <div :class="{'notification':countnum>0}">
          <h4 style="color: white;">{{ countnum }}</h4>
        </div>
      </div>
      <Teleport to="#modal">
        <div  class="modal-bg" v-if="isOpen">
          <div class="modal" ref="modal">
            <p>Notifications :</p>
            <div v-for="notification in notifications" :key="notification._id">
              <DocumentContainer :document="notification.file" />
            </div>
            <button @click="toclose">close notifications</button>
          </div>
        </div>
      </Teleport>
    </div>
    <img src="@/assets/Albert.jpeg" alt="" class="profile" @click="goToProfile">
  </div>
  <TabsWrapper class="wrapper">
    <Tab title="home" id="home">
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <WelcomeDoctor :name="user.name" />
        <div style="display: flex; flex-direction: row; justify-content: space-between; gap: 10px;">
          <DateNTime style="width: 200px" />
          <TotalCard :total-name="totalName" :total-num="totalnum" class="total"/>
        </div>
        {{ items }}
      </div>
    </Tab>
    <Tab title="appointments" id="appointments">
      <AppointmentsPatientTable/>
    </Tab>
    <Tab title="records">
      <medicalRecordTable/>
    </Tab>
  </TabsWrapper>
  <button class="log-out" @click="logout">log out</button>
</template>

<script>
import Tab from '@/components/Tab.vue';
import TabsWrapper from '@/components/TabsWrapper.vue';
import AppointmentsPatientTable from '@/components/AppointmentsPatientTable.vue';
import { onClickOutside } from '@vueuse/core';
import DateNTime from '@/components/DateNTime.vue';
import WelcomeDoctor from '@/components/WelcomeDoctor.vue';
import TotalCard from '@/components/TotalCard.vue';
import medicalRecordTable from '@/components/medicalRecordTable.vue';
import DocumentContainer from '@/components/DocumentContainer.vue';
import GraphforPatient from '@/components/GraphforPatient.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    Tab,
    TabsWrapper,
    AppointmentsPatientTable,
    DateNTime,
    WelcomeDoctor,
    TotalCard,
    medicalRecordTable,
    DocumentContainer,
    GraphforPatient,
  },
  data() {
    return {
      isOpen: false,
      isProfile: false,
      modal: null,
      notifications: [],
      countnum: null,
      items: null,
      totalName: 'appointment',
      totalnum: 6,
      user: {
        name: 'ahmed',
      },
      
      router: useRouter(),
    };
  },
  sockets:{
    connect(){
      console.log('connected')
      console.log('Socket ID:', this.$socket.id);
      
 
  
  const userId = localStorage.getItem('id'); // Parse JSON if userId is an object stored as a string
  if (userId) {
    this.$socket.emit('registerUser', userId);
    console.log(`User registered: ${userId}`);
  } else {
    console.log('User ID not found or user role is not patient.');
  }
    },
    disconnect(){
      console.log('dis')
    },
    newEmit(data){
        this.countnum = data;
        console.log('Received newEvent:', data);
        this.notify();
    }
    
  },
  methods: {
    connect() {
      console.log('Successfully connected to the server!');
    },
    logout() {
      localStorage.removeItem('id');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      this.router.push('/');
      this.socket.emit('deletekey');
    },
    async count() {
      try {
        const id = localStorage.getItem('id');
        const res = await fetch(`http://localhost:3000/api/count/${id}`);
        const data = await res.json();
        this.countnum = data;
      } catch (error) {
        console.log(error);
      }
    },
    async getNotifications() {
      try {
        const id = localStorage.getItem('id');
        const res = await fetch(`http://localhost:3000/api/notificationDoc/${id}`);
        const data = await res.json();
        if(this.notifications = data)
        console.log(this.notifications)
      } catch (error) {
        console.log(error);
      }
    },
    async updateStatus(){
      try{
        const id = localStorage.getItem('id');
        const res = await fetch(`http://localhost:3000/api//uploadStatus/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json', // Correct headers format
        },
     });
        
      }catch(error){
        console.log(error);
      }
    },
    async notify() {
      await this.count();
      await this.getNotifications();
    },
    opening() {
      this.isOpen = !this.isOpen;
      this.countnum=0
    },
    toclose(){
      this.isOpen = false
      this.notifications=[]
    },
    goToProfile() {
      this.router.push('/patient-profile');
    },
  },
  mounted() {
    this.notify();

    if (this.socket) {
      console.log(this.socket.id);
    }

    onClickOutside(this.modal, () => {
      this.isOpen = false;
    });
    onClickOutside(this.modal, () => {
      this.isProfile = false;
    });
  },
};
</script>

<style scoped>
* {
  color: black;
}
.wrapper {
  height: 100vh;
  width: 100vw;
}
.modal-bg {
  z-index:10;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  position: absolute;
  top: 60px;
  right: 100px;
  background: white;
  padding: 50px 100px;
  border-radius: 5px;
  box-shadow: 0px 10px 5px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 50vw;
  align-items: center;
}

.container {
  height: min-content;
  width: 20vw;
  position: absolute;
  top: 25px;
  right: 10px;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}
.notification-img {
  height: 30px;
  width: 30px;
}
button {
  padding: 10px;
  color: white;
  background-color: #00cec8;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 10px;
  width: 15vw;
}
.modal > p {
  margin-bottom: 10px;
  position: absolute;
  left: 20px;
  top: 20px;
}
.profile {
  border-radius: 50%;
  height: 40px;
  width: 40px;
}

.total {
  height: 100px;
  width: 80%;
}
.log-out {
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 80px;
}
.med {
  margin-top: 300px;
}
.notification {
  position: absolute;
  bottom: 3px;
  right: 0;
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 8px;
  font-weight: bold;
}
</style>
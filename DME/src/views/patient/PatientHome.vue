<script setup>
  import Tab from '@/components/Tab.vue';
  import TabsWrapper from '@/components/TabsWrapper.vue';
  import AppointmentsPatientTable from '@/components/AppointmentsPatientTable.vue';
  import { onClickOutside } from '@vueuse/core'
  import DateNTime from '@/components/DateNTime.vue'
  import WelcomeDoctor from '@/components/WelcomeDoctor.vue'
  import TotalCard from '@/components/TotalCard.vue'
  import medicalRecordTable from '@/components/medicalRecordTable.vue';
  import GraphforPatient from '@/components/GraphforPatient.vue';
  import { ref } from 'vue'

  const isOpen = ref(false)
  const isProfile = ref(false)
  const modal = ref(null)

  onClickOutside(modal, () => { isOpen.value = false })
  onClickOutside(modal, () => { isProfile.value = false })

  let notifications = [
      "notification 1 notification 1 notification 1 notification 1 notification 1 notification 1 notification 1 notification 1 notification 1",
      "notification 2",
      "notification 3"
  ]
  let user = {
    name: 'some name'
  }
  console.log(notifications.length)
</script>

<template>
  <div class="container">
    <div class="notifications">
      <img v-if="notifications.length > 0" src="@/assets/notified.png" alt="" @click="isOpen = true" class="notification-img">
      <img v-else src="@/assets/no-notification.png" alt="" @click="isOpen = true" >
      <Teleport to="#modal">
        <div class="modal-bg" v-if="isOpen" >
            <div class="modal" ref="modal">
              <p>
                Notifications :
              </p>
              <div class="notification" v-for="notification in notifications" :key="notification">
                {{ notification }}
              </div>
              <button @click="isOpen = false">
                close notifications
              </button>
            </div>
          </div>
      </Teleport>
    </div>
    <img src="@/assets/Albert.jpeg" alt="" class="profile" @click="this.$router.push('/patient-profile/1')">
  </div>
  <TabsWrapper class="wrapper">
    <Tab title="home" id="home">
      <div style="display: flex; flex-direction: column; gap: 10px;">
          <WelcomeDoctor :name="user.name" />
        <div style="display: flex; flex-direction: row; justify-content: space-between; gap: 10px;">
          <DateNTime style="width: 200px" />
          <TotalCard class="total"/>
          <TotalCard class="total"/>
        </div>
        <GraphforPatient/>
      </div>
    </Tab>
    <Tab title="appointments" id="appointments">
      <AppointmentsPatientTable/>
    </Tab>
    <Tab title="records">
      <!-- <div class="med"> -->
        <medicalRecordTable/> 
      <!-- </div> -->
    </Tab>
    
  </TabsWrapper>
  <button class="log-out" @click="this.$router.push('/')">
    log out
  </button>
</template>

<style scoped>
  * {
    color: black;
  }
  .wrapper {
    height: 100vh;
    width: 100vw;
  }
  .modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5) ;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  position: absolute ;
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
  .notification {
    margin-bottom: 5px;
    padding: 10px;
    background-color: #00cec8 ;
    border-radius: 5px;
    color: white;
    width: 80% ;
  }
  .container {
    height: min-content ;
    width: 20vw;
    position: absolute ;
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
    height : 30px;
    width: 30px;
  }
  button {
    padding: 10px;
    color: white ;
    background-color: #00cec8;
    border-radius: 5px;
    font-size: 14px;
    margin-top: 10px;
    width: 15vw;
  }
  .modal > p {
    margin-bottom : 10px;
    position: absolute;
    left : 20px;
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
    position: fixed ;
    bottom: 10px;
    right: 10px;
    width: 80px;
  }
  .med{
    margin-top:300px
  }
</style>

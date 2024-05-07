<template>
    <button class="edit-btn" @click.prevent="isEdit = true">
        edit
    </button>
    <div class="profile-container" style="display: flex; align-items: center; flex-direction: row">
      <div
        style="
          display: flex;
          align-items: center;
          flex-direction: column;
          padding-right: 50px;
          gap: 10px;
          justify-content: space-between;
        "
      >
        <img src="../assets/Albert.jpeg" alt="" class="profil-picture" />
        <p style="margin-bottom: none; padding: 0; font-size: 24px">
          <!-- {{ name }} -->
          {{ user.first_name }} {{ user.last_name }}
        </p>
        <p style="margin-bottom: 0; padding: 0; color: rgba(67, 106, 230, 0.5)">{{ user.email }}</p>
        <p style="margin-bottom: 0; padding: 0">Appointments</p>
        <div
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 30px;
            margin: 10px;
          "
        >
          <div
            style="display: flex; flex-direction: column; align-items: center; gap: 0px; width: 70px"
          >
            <p style="text-align: center; margin: 0">5</p>
            <!-- <p>
                          {{ pastAppointmentsCount }}
                      </p> -->
            <p style="text-align: center" class="Label">past</p>
          </div>
          <hr style="border: 1px solid rgba(67, 106, 230, 0.4); height: 30px" />
          <div
            style="display: flex; flex-direction: column; align-items: center; gap: 0px; width: 70px"
          >
            <p style="text-align: center; margin: 0">5</p>
            <!-- <p>
                          {{ upcomingAppointmentsCount }}
                      </p> -->
            <p style="text-align: center" class="Label">upcoming</p>
          </div>
        </div>
        <button class="snd-msg-btn">Send message</button>
      </div>
      <span class="divider"></span>
      <div class="right-half">
        <div class="gender">
          <p class="Label">Gender</p>
          <input v-if="isEdit" type="text" >
          <p v-else > {{ user.gender }} </p>
        </div>
        <div class="birthday">
          <p class="Label">Birth day</p>
          <p>{{ user.patient_profile.date }}</p>
        </div>
        <div class="phone">
          <p class="Label">Phone Number</p>
          <p>{{ user.patient_profile.phone_number }}</p>
        </div>
        <div class="address">
          <p class="Label">Address</p>
          <p>{{ user.patient_profile.address.detail }}</p>
        </div>
        <div class="City">
          <p class="Label">{{ user.patient_profile.address.city }}</p>
          <p>{{ user.patient_profile.address.wilaya}}</p>
        </div>
      </div>
    </div>
  </template>
  <script>
  import moment from 'moment'
  export default {
    props: ['user'],
    data(){
      return{
        isEdit: false,
        user: {
            patient_profile: {
                address: {
                    city: 'el eulma',
                    wilaya: 'Setif',
                    detail: 'some fucking detail'
                },
                phone_number: '05 za za za za',
                date: '23-08-2003'
            },
            gender: 'male',
            first_name: 'idir',
            last_name: 'OULD'
        }
     }
    },
    methods:{
    },
   created(){
    
    }
  
  }
  </script>
  <style scoped>
  .profile-container {
    color: rgba(67, 106, 230, 1);
    padding: 20px;
    border: 2px solid rgba(67, 106, 230, 0.5);
    width: 720px;
    border-radius: 10px;
  }
  .profil-picture {
    vertical-align: middle;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  * {
    font-family: sans-serif;
  }
  .snd-msg-btn {
    background-color: rgba(67, 106, 230, 1);
    color: white;
    border-radius: 10px;
    border: none;
    height: 40px;
    width: 200px;
    font-size: 14px;
  }
  .snd-msg-btn:hover {
    background-color: rgba(67, 106, 230, 0.8);
  }
  .snd-msg-btn:hover:active {
    background-color: rgba(67, 106, 230, 0.5);
  }
  .right-half {
    display: grid;
    gap: 20px;
    grid-template-columns: 150px 150px;
    grid-template-rows: repeat(3, auto);
    color: rgba(67, 106, 230, 1);
    margin-left: 50px;
    height: 100%;
  }
  .gender {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .Label {
    color: rgba(67, 106, 230, 0.5);
    margin-bottom: 10px;
  }
  .divider {
    display: inline-block;
    width: 0;
    border-left: 1px solid rgba(67, 106, 230, 0.4);
    border-right: 1px solid rgba(67, 106, 230, 0.4);
    height: 300px;
  }
  .right-half > div {
    border-bottom: 2px solid rgba(67, 106, 230, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  </style>
  
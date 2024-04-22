<template>
    <div>
      <h2>Medication Tracker</h2>
      <input type="text" v-model="newMedication" @keyup.enter="addMedication">
      <button @click="addMedication">Add Medication</button>
      <ul>
        <li v-for="(medication, index) in medications" :key="index">{{ medication }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newMedication: '',
        medications: [],
      };
    },
    methods: {
      addMedication() {
        if (this.newMedication.trim() !== '') {
          this.medications.push(this.newMedication);
          this.newMedication = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
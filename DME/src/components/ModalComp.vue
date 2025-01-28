<template>

    <div class="vue-modal" v-show="open">
          <div class="vue-modal-inner">
            <div class="vue-modal-content">
              <div class="diagnosis-container">
                <div class="">
                    <div class="appointment-header">
                        <p class="age">
                            {{ appointment.age }} Years Old
                        </p>
                        <p>
                            {{ appointment.createdAt }}
                        </p>
                    </div>
                </div>
                <hr style="width: 200px; border: 1px solid rgba(42, 75, 102, 0.3); margin-bottom: 10px; margin-top: 10px;">
                <p v-if="appointment.diagnosises.length > 1" class="label">
                    Diagnoses :
                </p>
                <p v-else-if="appointment.diagnosises.length === 1" class="label">
                Diagnosis :
                </p>
                <div class="list" v-for="(diagnosis, index) in appointment.diagnosises" :key="index">
                    {{ diagnosis }}
                </div>
                <p v-if="appointment.prescriptions.length > 1" class="label">
                    Prescriptions :
                </p>
                <p v-else-if="appointment.prescriptions.length === 1" class="label">
                    Prescription :
                </p>
                <div class="list" v-for="(prescription, index) in appointment.prescriptions" :key="index">
                    {{ prescription }}
                </div>
                <p class="label">
                    Report :
                </p>
                <p class="list" style="padding: 5px">
                    {{ appointment.rapport }}
                    
                </p>
            </div>
              <h3>Files</h3>
              <DocumentContainer :appointment="appointment" class="setCont"/>
              <button class="cls-btn" type="button" @click="$emit('close')">Close</button>
              
            </div>
          </div>
      </div>
  </template>
  
<script>
import DocumentContainer from './DocumentContainer.vue';
  export default {
  components: { DocumentContainer },
    props: ['appointment','open'],
  };
</script>
<style scoped>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.vue-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.vue-modal-inner {
  max-width: 500px;
  margin: 2rem auto;
}

.vue-modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(42, 75, 102, 0.3);
  background-clip: padding-box;
  border-radius: 0.3rem;
  padding: 1rem;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
}
.cls-btn {
    width: 100px; 
    height: 30px;
    background-color: rgba(42, 75, 102, 1);
    color: white;
    border-radius:5px;
    margin-top:20px;
}
.cls-btn:hover {
  background-color:  rgba(42, 75, 102, 0.8);
}
.setCont{
  margin-top:10px
}
.appointment-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

}
.age{
  margin-right:20px;
}
.list {
    display: flex;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid rgba(42, 75, 102, 0.5);
    margin-bottom: 3px;
}
.label {
    margin-bottom: 5px;
}
</style>
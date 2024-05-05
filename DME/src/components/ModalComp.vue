<template>
    <div class="vue-modal" v-show="open">
          <div class="vue-modal-inner">
            <div class="vue-modal-content">
              <slot/>
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
    data(){
      return{

      }
    },
    created(){
    
    }
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
</style>
<template>
    <div class="tab-content" v-show="selectedTitle == title">
      <slot/>
    </div>
  </template>
  
  <script>
  import { inject } from 'vue'
  export default {
    props: ['title'],
    setup() {
        const selectedTitle = inject("selectedTitle");
        return {
            selectedTitle
        }
    }
  }
  </script>
  
  <style>
    .tab-content {
        color: black;
        display: flex; 
        flex-direction: row;
        justify-content: space-between ;
        width: 40vw;
    }
  </style>
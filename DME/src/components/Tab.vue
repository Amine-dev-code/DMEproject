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
        justify-content: center;
        width: 100vw;
        height: 100vw;
        align-items: center;
    }
    ul {
      list-style: none;
    }
  </style>
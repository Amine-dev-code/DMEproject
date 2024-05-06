<template>
    <div class="Tabs">
      <ul class="tabs_header">
          <li v-for="title in tabTitles" 
          :key="title"
          @click="selectedTitle = title"
          class="tabs"
          >
              {{  title }}
          </li>
      </ul>
      <slot/>
    </div>
  </template>
  
  <script>
  import { ref, provide } from 'vue'
  export default {
      setup(props, { slots }) {
          const tabTitles = ref(slots.default().map((tab) => tab.props.title))
          const selectedTitle = ref(tabTitles.value[0])
          provide('selectedTitle', selectedTitle)
  
          return {
              tabTitles,
              selectedTitle
          };
      }
  }
  </script>
  
  <style>
  .Tabs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .tabs_header {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40vw;
  }
  .tabs_header > li {
    border-left: 2px solid black;
    border-right: 2px solid black;
    text-decoration: none;
    padding: 10px;
  }
  </style>
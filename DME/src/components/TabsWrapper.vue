<template>
    <div class="Tabs">
      <ul class="tabs_header">
          <li v-for="title in tabTitles" 
          :key="title"
          @click="selectedTitle = title"
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
  
  </style>
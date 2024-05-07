<template>
  <div class="Tabs">
    <ul class="tabs_header">
        <li v-for="title in tabTitles" 
        :key="title"
        @click="Pick(title)"
        class="tabs"
        :class="{ active : title == selectedTitle, Notification : title == notifications && Notifications.length > 0 }"
        >
            {{  title }}
        </li>
    </ul>
    
    <slot/>
  </div>
</template>

<script>
import { ref, provide } from 'vue'
const isOpen = ref(false)

export default {
    setup(props, { slots }) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])
        provide('selectedTitle', selectedTitle)

        return {
            tabTitles,
            selectedTitle
        };
    },
    data() {
      return {
        Notifications: [
          "heelo tehre",
          "heelo tehre"
        ]
      };
    },
    methods: {
      Pick(title) {
        this.selectedTitle = title
        console.log(title)
        if(title == "notifications") {
          isOpen.value = true
        }
      }
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
li {
  height: 40px ;
  display: flex;
  justify-content: center;
  align-items:center;
  padding: 10px;
  font-size: 20px;
  font-weight: normal;
}
.active {
  border-radius : 5px;
  background-color: rgba(0, 206, 200, 0.1);
  color: #00cec8;
}
</style>
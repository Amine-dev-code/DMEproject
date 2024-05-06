<script setup>
  import Tab from '@/components/Tab.vue';
  import TabsWrapper from '@/components/TabsWrapper.vue';
</script>

<template>
  <TabsWrapper class="wrapper">
    <Tab title="home">
      hello from tab 1 
    </Tab>
    <Tab title="appointments">
      hello from tab 2
    </Tab>
    <Tab title="notifications">
      hello from tab 3
    </Tab>
    <Tab title="records">
      hello from tab 4
    </Tab>
  </TabsWrapper>
</template>

<style scoped>
  * {
    color: black;
  }
  .wrapper {
    
  }
</style>

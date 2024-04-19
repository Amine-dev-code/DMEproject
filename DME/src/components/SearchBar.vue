<template>
  <input-field class="searchbar" Placeholder="Search" />
</template>

<script>
import inputField from './inputField.vue'

export default {
  components: {
    inputField
  }
}
</script>
<style>
.searchbar {
  width: 20vw;
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
  background-color: rgba(0, 206, 200, 0.1);
}
.searchbar::placeholder {
  color: rgba(67, 106, 230, 0.5);
}
</style>

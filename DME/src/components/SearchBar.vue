<template>
  <input class="searchbar" placeholder="Search" />
</template>

<script>
export default {}
</script>
<style>
.searchbar {
  width: 20vw;
  height: 40px;
  padding-left: 10px;
  background-color: rgba(0, 206, 200, 0.1);
  border-radius: 10px;
  border: 2px solid rgba(0, 206, 200, 1);
}
.searchbar::placeholder {
  color: rgba(67, 106, 230, 0.5);
}
body {
  margin: 0;
  padding: 0;
}
input:focus {
  outline: none;
}
</style>

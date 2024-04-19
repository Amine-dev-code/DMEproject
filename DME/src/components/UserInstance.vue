<template>
  <div class="user-instance">
    <span>{{ name }}</span>
    <span>|</span>
    <span>{{ birthday }}</span>
    <span>|</span>
    <span> {{ gender }} </span>
    <span>|</span>
    <span> {{ phone }} </span>
    <span>|</span>
    <span> {{ address }}</span>
  </div>
</template>
<script>
export default {
  props: ['name', 'birthday', 'gender', 'phone', 'address']
}
</script>
<style>
.user-instance {
  width: 50vw;
  height: 40px;
  border: 2px solid #00cec8;
  border-radius: 5px;
  background-color: rgba(0, 206, 200, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: rgba(67, 106, 230, 1);
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  font-family: sans-serif;
}
span:nth-child(even) {
  color: #00cec8;
}
</style>

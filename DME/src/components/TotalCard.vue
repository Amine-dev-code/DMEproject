<template>
  <div class="total"> total {{ totalName }} is {{ totalNum }} </div>
</template>

<script>
export default {
  props: ['total-name', 'total-num']
}
</script>
<style>
.total {
  background-color: rgba(0, 206, 200, 0.1);
  border: 2px solid #00cec8;
  color: #00cec8;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

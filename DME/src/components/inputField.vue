<template>
  <input class="login-form" :type="Type" :name="Name" :placeholder="Placeholder" />
</template>

<script>
export default {
  props: ['Type', 'Name', 'Placeholder']
}
</script>

<style>
.login-form {
  height: 30px;
  width: 150px;
  color: #2a4b66;
  border-radius: 5px;
  border: 2px solid #00cec8;
}
</style>

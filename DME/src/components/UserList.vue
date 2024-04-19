<template>
  <div class="user-list">
    <span>NAME</span>
    <span style="color: rgba(67, 106, 230, 1)">|</span>
    <span> BIRTHDAY</span>
    <span>|</span>
    <span> GENDER </span>
    <span>|</span>
    <span> PHONE </span>
    <span>|</span>
    <span> ADDRESS </span>
  </div>
</template>
<script></script>
<style>
.user-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  width: 50vw;
  border-bottom: 2px solid rgba(67, 106, 230, 1);
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  font-family: sans-serif;
  margin-bottom: 10px;
}
span,
.seperator {
  color: rgba(67, 106, 230, 1);
}
</style>

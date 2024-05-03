<template>
  <div class="sunday-time-container">
    <div>8:30 am</div>
    <hr style="width: 10px; border: 1px solid rgba(42, 75, 102, 0.5); height: 0px" />
    <div>4:00 pm</div>
  </div>
</template>

<style scoped>
.sunday-time-container {
  display: flex;
  flex-direction: row;
  width: 20vw;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: rgba(42, 75, 102, 1);
}
.sunday-time-container > div {
  height: 30px;
  width: 300px;
  border: 2px solid rgba(0, 206, 200, 0.2);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

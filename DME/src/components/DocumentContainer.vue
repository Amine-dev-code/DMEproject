<template>
  <div class="doc-container">
    <p>Documents</p>
    <div v-if="document" class="document" v-for="doc in document" :key="doc">
      <img src="../assets/file-icon.png" alt="" />
      <a :href="'../../../uploads/'+ doc" >{{ doc}}</a>
    </div>
    <div v-else class="document" v-for="document in appointment.files" :key="document">
      <img src="../assets/file-icon.png" alt="" />
      <a :href="'../../../uploads/'+ document.filename" >{{ document.filename }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['document','appointment'],
 
  
}
</script>

<style scoped>
.doc-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  gap: 5px;
  border: 2px solid black;
  background-color: whitesmoke;
  padding: 10px 0;
  margin-bottom:10px
}
.document {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;

  border-radius: 5px;
  border: 2px solid grey;
  
}
.document > img {
  height: 30px;
  width: 30px;
}
</style>

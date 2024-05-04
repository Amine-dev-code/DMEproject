<template>
  <div class="doc-container">
    <p>Documents</p>
    <div class="document" @click.prevent="" v-for="document in documents" :key="document">
      <img src="../assets/file-icon.png" alt="" />
      <p>{{ document.docTitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['docTitle'],
  data() {
    return {
      documents: [
        { docTitle: 'some thing weird' },
        { docTitle: 'some thing beardy' },
        { docTitle: 'some thing smelly' },
        { docTitle: 'some thing fishy' }
      ]
    }
  }
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
  width: 31vw;
  padding: 10px 0;
}
.document {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  width: 30vw;
  border-radius: 5px;
  border: 2px solid grey;
}
.document > img {
  height: 30px;
  width: 30px;
}
</style>

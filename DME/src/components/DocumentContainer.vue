<template>
    <div class="doc-container" @click.prevent="clicked = !clicked">
        <img src="../assets/file-icon.png" alt="">
        <p>
            {{ docTitle }}
        </p>
    </div>
    <div v-if="clicked">
        <p>
            hello there
        </p>
    </div>
</template>

<script>
export default {
    props: ['docTitle'],
    data() {
        return {
            clicked: false
        };
    }
}
</script>

<style>
.doc-container {
    width: 250px;
    height: 40px;
    border: 1px solid #436AE6;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    color: #436AE6;
    cursor: pointer; /* Add cursor pointer for clickable effect */
}
.doc-container > img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.doc-container:hover {
    background-color: rgba(67, 106, 230, 0.2);
}
</style>

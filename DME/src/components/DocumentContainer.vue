<template>
    <div class="doc-container">
        <p>
            x-rays.pdf
        </p>
    </div>
</template>
<script>
export default {
    props: ['docName']
}
</script>
<style>
.doc-container {
    width: 250px ;
    height: 40px ;
    border: 1px solid black;
    border-radius: 10px ;
    display: flex ;
    flex-direction: row;
    align-items: center;
}
</style>
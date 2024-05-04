<template>
    <div class="doctor-comp">
        <div class="doctor-image">
            <img src="" alt="">
        </div>
        <div class="doctor-details">
            <div>
                <h1 class="doctor-name">
                    {{  data.names[slideIndex] }}
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['']
}
</script>

<style scoped>
.doctor-comp {
    position: relative ;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    height: 100%;
    text-transform: uppercase;
    letter-spacing : 2px;
    color: red ;
}
</style>
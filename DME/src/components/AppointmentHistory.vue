<template>
    <div class="container">
        <p>
            Appointments :
        </p>
        <div class="history-container">
            <div v-for="appointment in appointments" class="appointment" :key="id">
                <img src="../assets/appointment.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['date'],
    data() {
        return {
            appointments: [
                {
                    id: '',
                }
            ]
        };
    }
}
</script>

<style scoped>
.container {
    height: 50vh;
    width: 70%;
    border-radius: 5px;
    border: 2px solid rgb(162, 162, 162);
    display: flex;
    flex-direction: column;
}
.history-container {
    display: flex;
    flex-direction: column;
}
.appointment {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
}
.appointment img{
    height: 30px;
    width: 30px;
}
</style>
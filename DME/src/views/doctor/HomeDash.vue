<template>
    <div class="home-container">
        <WelcomeDoctor class="welcome" />
        <div style="display: flex; flex-direction: row; grid-column-start: 2;
                    grid-column-end: 3;
                    grid-row-start: 1;
                    grid-row-end: 2;
                    gap: 10px;"
        >
            <div class="total-container">
                <TotalCard class="total-patients" total-name="patients" total-num="100" />
                <TotalCard class="total-visits" total-name="appointments" total-num="500" />
            </div>
            <DateNTime/>
        </div>
        <div class="notes-and-donut">
            <DonutCircle class="donut-circle" />
        </div>
        <PatientCount class="patient-count" />
    </div>
</template>
<script>
import WelcomeDoctor from '@/components/WelcomeDoctor.vue'
import TotalCard from '@/components/TotalCard.vue'
import DonutCircle from '@/components/DonutCircle.vue'
import PatientCount from '@/components/PatientCount.vue'
import DateNTime from '@/components/DateNTime.vue'

export default {
    components: {
        WelcomeDoctor,
        TotalCard,
        DonutCircle,
        PatientCount,
        DateNTime
    }
}
</script>
<style>
.home-container {
    display: grid;
    grid-template-columns: 50vw auto;
    grid-template-rows: 150px auto;
    grid-column-gap: 10px ;
    grid-row-gap: 40px ;
}
.welcome {
    grid-column-start: 1;
    grid-column-end:3;
    grid-row-start: 1;
    grid-row-end:2;
}
.total-container {
    display: flex;
    flex-direction: column;
    gap: 10px ;
}
.notes-and-donut {
    display: flex;
    flex-direction: column;
    justify-content: center ;
    align-items: center ;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
} 
.patient-count {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
}
</style>
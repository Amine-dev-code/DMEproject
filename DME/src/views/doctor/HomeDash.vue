<template>
    <div class="home-container">

    </div>
</template>
<script>
import WelcomeDoctor from '@/components/WelcomeDoctor.vue'
import TotalCard from '@/components/TotalCard.vue'
import DonutChart from '@/components/DonutCircle.vue'
import PatientCount from '@/components/PatientCount.vue'
import NoteSheet from '@/components/NoteSheet.vue'

export default {
    components: {
        WelcomeDoctor,
        TotalCard
    }
}
</script>
<style>
.home-container {
    display: grid;
}
</style>
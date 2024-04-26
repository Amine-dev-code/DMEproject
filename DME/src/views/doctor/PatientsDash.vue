<template>
    <SideBar name="idir ouldkhaoua" />
    <PatientsTable/>
    <button class="add-patient-btn">
        add a patient
    </button>
    <div class="patients-dash-container">
    </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import PatientsTable from '@/components/PatientsTable.vue';
export default {
    components: {
        PatientsTable,
        SideBar
    }
}
</script>
<style>
.patients-dash-container {
    left: 25vw;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.add-patient-btn {
    background-color: red;
    color: white; 
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 10px;
    position: absolute;
    left: 20vw;
}
</style>
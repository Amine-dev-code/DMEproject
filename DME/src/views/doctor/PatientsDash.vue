<template>
    <SearchBar class="search-bar"/>
    <SideBar name="idir ouldkhaoua" />
    <PatientsTable/>
    <button class="add-patient-btn" @click.prevent>
        add a patient
    </button>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import PatientsTable from '@/components/PatientsTable.vue';
import SearchBar from '@/components/SearchBar.vue';

export default {
    components: {
        PatientsTable,
        SideBar,
        SearchBar
    }
}
</script>
<style>
.add-patient-btn {
    background-color: rgba(0, 206, 200, 1);
    color: white; 
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 10px;
    position: absolute;
    right: 60px;
    font-size: 18px;
    font-family: sans-serif;
    top: 20px;
}
.add-patient-btn:hover {
    background-color: rgba(0, 206, 200, 0.8);
}
.add-patient-btn:active {
    background-color: rgba(0, 206, 200, 0.5);
}
.search-bar {
    position: absolute;
    left: calc(20vw + 60px) ;
    top: 20px;
}
</style>
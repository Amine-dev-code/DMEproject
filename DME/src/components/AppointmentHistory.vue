<template>
    <div class="app-hist-container">
        <p>
            Appointments:
        </p>
        <div class="history-container">
            <div v-for="appointment in appointments" class="appointment" :key="appointment._id" @click="transfer(appointment)">
                <img src="../assets/appointment.png" alt="">
                <p>
                    {{ appointment.diagnosises[0] }}
                </p>
                <p>
                    {{ appointment.createdAt }}
                </p>
            </div>
        </div>
        <ModalComp :appointment="appointment" :open="isOpen" @close="isOpen = !isOpen" class="appointment-details">
            <div class="diagnosis-container">
                <div class="">
                    <div class="appointment-header">
                        <p>
                            {{ appointment.age }} Years Old
                        </p>
                        <p>
                            {{ appointment.createdAt }}
                        </p>
                    </div>
                </div>
                <hr style="width: 200px; border: 1px solid rgba(42, 75, 102, 0.3); margin-bottom: 10px; margin-top: 10px;">
                <p v-if="appointment.diagnosises.length > 1" class="label">
                    Diagnoses :
                </p>
                <p v-else-if="appointment.diagnosises.length === 1" class="label">
                Diagnosis :
                </p>
                <div class="list" v-for="(diagnosis, index) in appointment.diagnosises" :key="index">
                    {{ diagnosis }}
                </div>
                <p v-if="appointment.prescriptions.length > 1" class="label">
                    Prescriptions :
                </p>
                <p v-else-if="appointment.prescriptions.length === 1" class="label">
                    Prescription :
                </p>
                <div class="list" v-for="(prescription, index) in appointment.prescriptions" :key="index">
                    {{ prescription }}
                </div>
                <p class="label">
                    Report :
                </p>
                <p class="list" style="padding: 5px">
                    {{ appointment.rapport }}
                    
                </p>
            </div>
        </ModalComp>
    </div>
</template>

<script>
import { ref } from "vue";
import ModalComp from './ModalComp.vue'
import moment from 'moment'
import DocumentContainer from "./DocumentContainer.vue";

export default {
    setup() {
        const isOpen = ref(false);
        return { isOpen };
    },
    data() {
        return {
            appointment: {
                _id: '',
                createdAt:null,
                diagnosises: [],
                prescriptions: [],
                rapport: '',
                age:null,
                files:[]
            },
            isPlural: false,
            appointments: []
        };
    },
    components: {
        ModalComp,
        DocumentContainer
    },
    methods: {
        transfer(_appointment) {
            this.isOpen = true;
            this.appointment = _appointment;
        },
        async medicalRecord(){
            try{
        const res=await fetch ('http://localhost:3000/api/clientDoctorVisits/663256774c6f6946ca1c6c03/66325051e0e2a989a8ca3cf4')
        const data= await res.json();
        for(let app of data){
        app.createdAt=moment(app.createdAt).format('MMMM Do YYYY');
        this.appointments.push(app)
       }

            }catch(error){
                console.log(error)
            }
        }
    },
    async created(){
        await this.medicalRecord()
    }
}
</script>

<style scoped>
.app-hist-container {
    
    width: 530px;
    border-radius: 5px;
    border: 2px solid rgba(42, 75, 102, 0.5);
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    color: #2a4b66 ;
}
.history-container {
    display: flex;
    flex-direction: column;
}
.appointment {
    display: flex;
    flex-direction: row;
    width: 500px;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    border: 2px solid rgba(42, 75, 102, 0.5);
    padding: 5px ;
    padding: 0 10px;
    color: #2a4b66;
    margin-bottom: 5px;
}
.appointment img{
    height: 30px;
    width: 30px;
}
.appointment-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.appointment-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.list {
    display: flex;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid rgba(42, 75, 102, 0.5);
    margin-bottom: 3px;
}
.label {
    margin-bottom: 5px;
}
hr {
    margin-left: 130px;
}

</style>

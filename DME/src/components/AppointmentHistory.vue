<template>
    <div class="app-hist-container">
        <p>
            Appointments:
        </p>
        <div class="history-container">
            <div v-for="appointment in this.appointments" class="appointment" :key="appointment.id" @click="transfer(appointment)">
                <img src="../assets/appointment.png" alt="">
                <p>
                    {{ appointment.title }}
                </p>
                <p>
                    {{ appointment.date }}
                </p>
            </div>
        </div>
        <ModalComp :open="isOpen" @close="isOpen = !isOpen" class="appointment-details">
            <div class="diagnosis-container">
                <div class="">
                    <div class="appointment-header">
                        <p>
                            {{ appointment.title }}
                        </p>
                        <p>
                            {{ appointment.date }}
                        </p>
                    </div>
                </div>
                <hr style="width: 200px; border: 1px solid rgba(42, 75, 102, 0.3); margin-bottom: 10px; margin-top: 10px;">
                <p v-if="appointment.diagnoses.length > 2" class="label">
                    Diagnoses :
                </p>
                <p v-else-if="appointment.diagnoses.length === 1" class="label">
                Diagnosis :
                </p>
                <div class="list" v-for="(diagnosis, index) in appointment.diagnoses" :key="index">
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
                    {{ appointment.report }}
                </p>
            </div>
        </ModalComp>
    </div>
</template>

<script>
import { ref } from "vue";
import ModalComp from './ModalComp.vue'

export default {
    setup() {
        const isOpen = ref(false);
        return { isOpen };
    },
    data() {
        return {
            isPlural: false,
            appointment: {
                id: '',
                title: '',
                date: '', 
                diagnoses: [],
                prescriptions: [],
                report: '',
            },
            appointments: [
                {
                    id: '1',
                    title: 'some title',
                    date: '23/09/2003', 
                    diagnoses: [
                        'diag 1',
                        'diag 2',
                        'diag 3'
                    ],
                    prescriptions: [
                        'prescription 1',
                        'prescription 2',
                        'prescription 3'
                    ],
                    report: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et explicabo, rerum asperiores facere est accusamus incidunt sequi consectetur non fugiat sit molestiae obcaecati quibusdam voluptatum eos enim, numquam magni?',
                },
                {
                    id: '2',
                    title: 'some titre',
                    date: '23/10/2003', 
                    diagnoses: ['diag 4'],
                    prescriptions: ['prescription 1'],
                    report: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et explicabo, rerum asperiores facere est accusamus incidunt sequi consectetur non fugiat sit molestiae obcaecati quibusdam voluptatum eos enim, numquam magni?',
                },
            ]
        };
    },
    components: {
        ModalComp
    },
    methods: {
        transfer(_appointment) {
            this.isOpen = true;
            this.appointment = _appointment;
        }
    }
}
</script>

<style scoped>
.app-hist-container {
    height: 50vh;
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

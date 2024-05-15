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
        <ModalComp :appointment="appointment" :open="isOpen" @close="isOpen = !isOpen" />
            
       
    </div>
</template>

<script>
import { ref } from "vue";
import ModalComp from './ModalComp.vue'
import moment from 'moment'
import DocumentContainer from "./DocumentContainer.vue";

export default {
    props:['user'],
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
        const id=localStorage.getItem('id')
        const res=await fetch (`http://localhost:3000/api/clientDoctorVisits/${this.user._id}/${id}`)
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

hr {
    margin-left: 130px;
}
.appointment-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

</style>

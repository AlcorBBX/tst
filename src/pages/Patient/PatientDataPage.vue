<template>
    <div class="section">
        <div class="patient__data" v-show="!isUpdate">
            <PatientData :patient="patient" :isUpdate="isUpdate"/>
            <!-- <main-button @click="setUpdate">Редактировать пациента</main-button> -->
        </div>
        <div v-if="isUpdate">
            <PatientUpdateForm :isUpdate="isUpdate" @setIsUpdate="setUpdate" :patientId="patient.id"
            :updatePatient="updatePatient" />
        </div>
        <div v-if="сonsultations?.length > 0">
            <ConsultationTable @remove="removeConsultation" :сonsultations="sortConsultation" :patientId="patient.id"/>
            <main-button @click="isUpdateConsultation = !isUpdateConsultation">{{isUpdateConsultation ? "Отмена" : "Редактировать консультации"}}</main-button>
            <main-button @click="isCreateConsultation = !isCreateConsultation">{{isCreateConsultation ? "Отмена" : "Создать консультацию"}}</main-button>
            <div v-if="isCreateConsultation">
                <ConsultationCreateForm :addConsultation="createNewConsultations" :patientId="patient.id"/>
            </div>
            <div v-if="isUpdateConsultation">
                <div>
                    <p>Выберите консультацию по ID</p> 
                </div>
                <select v-model="consultationPicked">
                    <option v-for="сonsultation in sortConsultation" 
                        key="{{сonsultation.id}}">{{сonsultation.id}}</option>     
                </select>
                <ConsultationUpdateForm :consultationPicked="consultationPicked" :addConsultation="updateConsultations" :patientId="patient.id"/>
            </div>
        </div>
    </div>
</template>
<script>
import { usePatients } from "@/hooks/usePatients";
import { useConsultation } from "@/hooks/useConsultation"
import PatientUpdateForm from "@/components/ui/Patient/PatientUpdateForm.vue";
import ConsultationTable from "@/components/ui/Consultation/ConsultationTable.vue";
import PatientData from "@/components/ui/Patient/PatientData.vue";
import ConsultationCreateForm from "@/components/ui/Consultation/ConsultationCreateForm.vue";
import ConsultationUpdateForm from "@/components/ui/Consultation/ConsultationUpdateForm.vue";
export default {
    data() {
        return {
            patient: {id: 0, middleName: '', name: '', surname: '', date: '', gender: '', snils: '' },
            isUpdate: false,
            isCreateConsultation: false,
            isUpdateConsultation: false,
            consultationPicked: ''
        };
    },
    setup(patientId) {
        const { patients, updatePatient } = usePatients(patientId);
        return {
            patients,
            updatePatient,
            ...useConsultation()
        };
    },
    methods: {
        removeConsultation(consultation) {
            this.сonsultations = this.сonsultations.filter(p => p.id !== consultation.id)
        },
        setUpdate() {
            this.isUpdate = !(this.isUpdate);
        },
    },
    created: function () {
        let patientId = this.$route.params.id - 1;
        this.patient = this.patients[patientId];
    },
    computed: {
        sortConsultation(){
            return this.сonsultations.filter(сonsultation => сonsultation.patientId.includes(this.patient.id))
        },
    },
    watch: {
        patientUpd(){
            return this.patient = this.patients[this.$route.params.id - 1];
        }
    },
    components: { PatientUpdateForm, ConsultationTable, PatientData, ConsultationCreateForm, ConsultationUpdateForm }
}
</script>
<style scoped>
button {
    margin-top: 10px;
    width: max-content;
}
.section{
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
}
</style>
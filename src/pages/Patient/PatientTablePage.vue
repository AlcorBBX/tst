<template>
    <div>
        <div class="searchForm">
            <main-input placeholder="Фамилия" v-model="searchMiddleNameQuery" />
            <main-input placeholder="Имя" v-model="searchNameQuery" />
            <main-input placeholder="Отчество" v-model="searchSurnameQuery" />
            <main-input placeholder="СНИЛС" v-model="searchSnilsQuery" />
        </div>
        <div v-if="patients?.length > 0">
            <PatientTable :patients='searchedSnillsPatients' @remove="removePatient" />
        </div>
        <div v-else>
            <p>Пациентов нет</p>
        </div>
        <main-button @click="isShow = !isShow">Создать пациента</main-button>
        <main-button @click="isShowUpdate = !isShowUpdate">Редактировать пациента</main-button>
        <create-modal v-model:show="isShow">
            <p>Создание нового пациента</p>
            <PatientCreateForm :addPatient="createNewPatient"/>
        </create-modal>
        <update-modal v-model:show="isShowUpdate">
            <p>Редактирование нового пациента</p>
            <p>Выберите ID пациента</p>
            <select v-model="patientPicked">
                <option v-for="patient in patients" 
                    key="{{patient.id}}">{{patient.id}}</option>     
            </select>
            <PatientUpdateForm :updatePatient="updatePatient" :patientId="patientPicked" @setIsUpdate="isShowUpdateM" :isUpdate="isShowUpdate"/>
        </update-modal>
    </div>
</template>
<script>
import PatientCreateForm from '@/components/ui/Patient/PatientCreateForm.vue';
import PatientTable from '@/components/ui/Patient/PatientTable.vue';
import PatientUpdateForm from '@/components/ui/Patient/PatientUpdateForm.vue';
import { usePatients } from "@/hooks/usePatients";
import useSearchedPatients from "@/hooks/useSearchedPatients";

export default {
    data(){
        return {
            isShow: false,
            isShowUpdate: false,
            patientPicked: ''
        }
    },
    props: {
        searchedPatients: [Array]
    },
    components: { PatientTable, PatientCreateForm, PatientUpdateForm },
    setup(patient) {
        const { patients, createNewPatient, updatePatient } = usePatients();
        return {
            patients,
            createNewPatient,
            updatePatient,
            ...useSearchedPatients(patients)
        }
    },
    methods: {
        removePatient(patient) {
            this.patients = this.patients.filter(p => p.id !== patient.id)
        },
        isShowUpdateM(props){
            this.isShowUpdate = props
        }
    },
}
</script>
<style scoped>
div{
    display: flex;
    flex-direction: column;
    margin: 15px 20px 0 20px
}
.searchForm{
    flex-direction: row;
}
.searchForm input {
    margin-right: 10px;
}
button{
    margin-top: 10px;
}
</style>
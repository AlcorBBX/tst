<template>
    <div>
        <p>Создание нового пациента</p>
        <PatientCreateForm :addPatient="createNewPatient"/>
    </div>
</template>
<script>
import PatientCreateForm from '@/components/ui/Patient/PatientCreateForm.vue';
import { usePatients } from "@/hooks/usePatients"
export default {
    components: { PatientCreateForm },
    setup(props) {
        const { createNewPatient } = usePatients();
        return {
            createNewPatient
        }
    }
}
</script>
<style scoped>
div {
    margin: 0 auto;
    text-align: center;
    align-items: center;
}
</style>
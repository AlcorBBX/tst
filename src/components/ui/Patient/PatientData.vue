<template>
    <div v-if="!isUpdate">
        <p>Имя:
            <strong>{{patient.name}}</strong>
        </p>
        <p>Фамилия:
            <strong>{{patient.middleName}}</strong>
        </p>
        <p v-if="patient.surname">Отчество:
            <strong>{{patient.surname}}</strong>
        </p>
        <p>Пол:
            <strong>{{patient.gender}}</strong>
        </p>
        <p>День рождения:
            <strong>{{patient.date}}</strong>
        </p>
        <p>Снилс:
            <strong>{{patient.snils}}</strong>
        </p>
        
    </div>
</template>
<script>
export default {
    props:{
        isUpdate: Boolean,
        patient: Object,
    }
}
</script>
<style>
    
</style>
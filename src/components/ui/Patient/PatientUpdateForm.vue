<template>
    <div>
        <div>
            <p>Имя: </p>
            <main-input v-model="form.name" />
        </div>
        <div>
            <p>Фамилия: </p>
            <main-input v-model="form.middleName" />
        </div>
        <div>
            <p>Отчество: </p>
            <main-input v-model="form.surname" />
        </div>
        <div>
            <p>Пол: </p>
            <main-input v-model="form.gender" />
        </div>
        <div>
            <p>Снилс: </p>
            <main-input v-model="form.snils" />
        </div>
        <div>
            <p>Дата: </p>
            <input type="date" v-model="form.date" />
        </div>

        <main-button @click="submit" :disabled="!patientId.length > 0">Сохранить</main-button>
        <main-button @click="this.$emit('setIsUpdate', false)">Отменить</main-button>
    </div>
</template>
<script>
import { useUpdatePatient } from '@/hooks/useUpdatePatient'

export default {
    props: {
        isUpdate: Boolean,
        patientId: [String, Number],
        updatePatient: {
            type: Function,
            required: true
        }
    },
    methods: {
        setChanges() {
            console.log(this.patientId)
        }
    },
    setup(props) {

        return {
            ...useUpdatePatient(props)
        };
    },
}
</script>
<style scoped>

</style>
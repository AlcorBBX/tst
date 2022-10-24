<template>
    <div>
        <div>
            <p>Дата: </p>
            <input type="date" v-model="form.date"/>
        </div>
        <div>
            <p>Время: </p>
            <input type="time" v-model="form.time"/>
        </div>
        <div>
            <p>Симптомы: </p>
            <main-input placeholder="Симптомы" v-model="form.symptoms" />
        </div>

        <main-button @click="submit" :disabled="consultationPicked < 0">Сохранить</main-button>
    </div>
</template>
<script>
import { useConsultationForm } from '@/hooks/useConsultationForm'

export default {
    props: {
        patientId: [String, Number],
        addConsultation: {
            type: Function,
            required: true
        },
        consultationPicked: {
            type: [String, Number],
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
            ...useConsultationForm(props)

        };
    },
}
</script>
<style scoped>
button {
    margin-top: 10px;
}
</style>
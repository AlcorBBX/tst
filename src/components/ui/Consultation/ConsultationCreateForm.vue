<template>
    <div>
        <input type="date" v-model="form.date"/>
        <input type="time" v-model="form.time"/>
        <main-input placeholder="Симптомы" v-model="form.symptoms" />

        <main-button @click="submit">Создать</main-button>
    </div>
</template>
<script>
import { useConsultationForm } from '@/hooks/useConsultationForm'
export default {
    props: {
        addConsultation: {
            type: Function,
            required: true
        },
        patientId: {
            type: [String, Number],
            required: true
        }
    },

    setup(props) {
        const { form, submit } = useConsultationForm(props)
        return {
            form,
            submit,
        }
    }
}
</script>
<style scoped>
div {
    display: flex;
    flex-direction: column;
}

input {
    margin-bottom: 10px;
}

button {
    width: 150px;
}

.inpt__date {
    background-color: rgb(119, 119, 119);
    color: aliceblue;
    border: none;
    padding: 10px 20px;
    font-size: 15px;
}
</style>
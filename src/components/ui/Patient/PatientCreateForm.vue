<template>
    <div>
        <main-input placeholder="Фамилия" v-model="form.middleName" />
        <main-input placeholder="Имя" v-model="form.name" />
        <main-input placeholder="Отчество" v-model="form.surname" />
        <main-input placeholder="Пол" v-model="form.gender" />
        <main-input placeholder="СНИЛС" v-model="form.snils" />
        <p class="valid" v-if="!valid">СНИЛС не валиден</p>
        <div>
            <p>Дата рождения: </p>
            <input class="inpt__date" type="date" v-model="form.date"/>
        </div>

        <main-button @click="submit" :disabled="!valid">Создать</main-button>
    </div>
</template>
<script>
import { useForm } from '@/hooks/useForm'
export default {
    props: {
        addPatient: {
            type: Function,
            required: true
        }
    },

    setup(props) {
        const { form, submit, valid } = useForm(props)
        return {
            form,
            submit,
            valid
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
.valid{
    color: red;
    margin-top: -5px;
    margin-bottom: 10px;
}
.inpt__date {
    background-color: rgb(119, 119, 119);
    color: aliceblue;
    border: none;
    padding: 10px 20px;
    font-size: 15px;
}
</style>
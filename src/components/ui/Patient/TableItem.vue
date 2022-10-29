<template >
    <tr key="{{patient.id}}">
        <td>
            <p>{{patient.id}}</p>
        </td>
        <td>
            <p>{{patient.middleName}}</p>
        </td>
        <td>
            <p>{{patient.name}}</p>
        </td>
        <td>
            <p>{{patient.surname}}</p>
        </td>
        <td>
            <p>{{patient.date}}</p>
        </td>
        <td>
            <p>{{patient.gender}}</p>
        </td>
        <td>
            <p>{{patient.snils}}</p>
        </td>
        <td>
            <router-link :to="{ name: 'patient', params: { id: patient.id} }">Перейти</router-link>
        </td>
        <td><button @click="$emit('remove', patient)">удалить</button></td>
    </tr>
</template>
<script>
export default {
    props: {
        patient: {
            type: Object,
            required: true
        },
        modelValue: [String, Number]
    },
    data() {
        return {
            checked: false,
        }
    },
}
</script>
<style scoped>
p {
    margin-bottom: 15px;
}
input{
    margin-bottom: 15px;
}
tr {
    border-bottom: 1px solid rgba(255, 255, 255, 0.39);
}
tr:last-child {
    border-bottom: none;
}
a{
    text-decoration: none;
    color: rgb(251, 255, 251);
    border: 1px solid rgb(0, 173, 0);
    padding: 5px 10px;
    /* margin-bottom: 15px; */
}
a:hover{
    color: rgb(223, 230, 223);
    border: 1px solid rgb(0, 141, 0);
    background-color: #2c2c2c;
}
button{
    margin-bottom: 15px;
    background-color: red;
    border: none;
    padding: 5px 10px;
    color: white;
    cursor: pointer;
}
</style>

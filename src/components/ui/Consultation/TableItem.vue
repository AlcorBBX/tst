<template >
    <tr key="{{consultation.id}}">
        <!-- <td>
            <input type="checkbox" v-model="checked" />
        </td> -->
        <td>
            <p>{{consultation.id}}</p>
        </td>
        <td>
            <p>{{consultation.date}}</p>
        </td>
        <td>
            <p>{{consultation.time}}</p>
        </td>
        <td>
            <p>{{consultation.symptoms}}</p>
        </td>
        <td>
        </td>
        <td><button @click="$emit('remove', consultation)">delete</button></td>
    </tr>
</template>
<script>
export default {
    props: {
        consultation: {
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
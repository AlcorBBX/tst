<template>
    <table>
        <thead>
            <tr>
                <th class="col">
                    <p>id</p>
                </th>
                <th class="col">
                    <p>Фамилия</p>
                </th>
                <th class="col">
                    <p>Имя</p>
                </th>
                <th class="col">
                    <p>Отчество</p>
                </th>
                <th class="col">
                    <p>Дата рождения</p>
                </th>
                <th class="col">
                    <p>Пол</p>
                </th>
                <th class="col">
                    <p>СНИЛС</p>
                </th>
            </tr>
        </thead>
        <tbody>
            <TableItem v-for="patient in patients" 
                :patient='patient' 
                :key="patient.id" 
                @remove="$emit('remove', patient)"
                
                />
        </tbody>
    </table>
</template>
<script>
import TableItem from "./TableItem.vue";
export default {
    props: {
        patients: {
            type: Array,
            required: true
        }
    },
    components: { TableItem },
}
</script>
<style scoped>
table {
    border: 1px solid rgba(255, 255, 255, 0.507);
    border-radius: 15px;
    text-align: center;
}
table th {
    padding: 15px;
}
</style>
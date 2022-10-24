<template>
    <table>
        <thead>
            <tr>
                <!-- <th class="col">
                    <p></p>
                </th> -->
                <th class="col">
                    <p>id</p>
                </th>
                <th class="col">
                    <p>Дата</p>
                </th>
                <th class="col">
                    <p>Время</p>
                </th>
                <th class="col">
                    <p>Симптомы</p>
                </th>
            </tr>
        </thead>
        <tbody>
            <TableItem v-for="consultation in сonsultations" 
                :consultation='consultation' 
                :key="consultation.id" 
                @remove="$emit('remove', consultation)"
                
                />
        </tbody>
    </table>
</template>
<script>
import TableItem from "./TableItem.vue";
export default {
    props: {
        сonsultations: {
            type: Array,
            required: true
        },
        patientId: {
            type: [String, Number],
            required: true
        }
    },
    components: { TableItem },
    methods: {
        
    },
}
</script>
<style scoped>
table {
    border: 1px solid rgba(255, 255, 255, 0.507);
    border-radius: 15px;
    text-align: center;
    padding: 10px;
}
table th {
    padding: 15px;
}
button{
    margin-bottom: 15px;
}
</style>
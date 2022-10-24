<template>
    <input :value="modelValue" @input="updateInput" type="text">
</template>
<script>
export default {
    name: 'main-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    },
}
</script>
<style scoped>
input {
    background-color: #424242;
    border: none;
    width: 160px;
    height: 30px;
    color: #e1e3e6;
}

input:focus {
    border: none;
    background-color: #424242;
}
</style>
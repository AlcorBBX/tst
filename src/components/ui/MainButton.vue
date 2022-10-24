<template>
    <button>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'main-button'
}
</script>
<style scoped>
button {
    background-color: #424242;
    border: none;
    cursor: pointer;
    padding: 10px 30px;
    color: #e1e3e6;
}

button:hover {
    background-color: #535353;
}
</style>
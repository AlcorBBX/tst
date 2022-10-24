<template>
    <div class="dialog" v-if="show" @click.stop="hideModal">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'create-modal',
    props: {
        show: Boolean
    },
    methods: {
        hideModal() {
            this.$emit('update:show', false)
        }
    },

}
</script>
  
<style>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.dialog__content {
    margin: auto;
    background: rgb(43, 43, 43);
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
}
</style>
  
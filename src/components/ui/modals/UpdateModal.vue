<template>
    <div class="dialog" v-if="show" @click.stop="hideModal">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'update-modal',
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
  
<style scoped>
</style>
  
<template>
    <button @click="$emit('add')" type="button" class="relative block w-full border-2 border-brand-blue/40 border-dashed rounded p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-4 text-brand-blue/50">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "Empty"
}
</script>

<style scoped>

</style>

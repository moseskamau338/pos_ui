<template>
  <button @click="$emit('clicked')" type="button" :class="themeGenerator.theme" class="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all h-fit">
    <slot>Button</slot>
  </button>
</template>

<script>
import {ThemeGenerator} from "@/library/ThemeGenerator";
export default {
  name: "CButton",
  props:{
    variant: { type: String, default: 'warning' },
  },
   setup(props){
      const themeGenerator = new ThemeGenerator().button(props.variant)

    return {themeGenerator}
  }
}
</script>

<style scoped>

</style>

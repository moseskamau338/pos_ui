<template>
<div :key="variant" :class="themeGenerator.bgColor" class="border-l-4 px-4 py-2 w-fit shadow rounded">
    <div class="flex items-center">
      <div class="flex-shrink-0">
        <i class="fa-solid" :class="themeGenerator.icon"></i>
      </div>
      <div class="ml-3">
        <p :class="themeGenerator.text" class="text-sm">
          <slot></slot>
        </p>
      </div>

      <!--<span><i class="fa-solid fa-close"></i></span>-->
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
import {ThemeGenerator} from "@/library/ThemeGenerator";
export default {
  name: "Alert",
  props:{
    variant:{
      default:'info',
      type: String
    },
    closable:{
      type:Boolean,
      default: false,
    }
  },
  setup(props){
      const themeGenerator = new ThemeGenerator().alert(props.variant)

    return {themeGenerator}
  }
}
</script>

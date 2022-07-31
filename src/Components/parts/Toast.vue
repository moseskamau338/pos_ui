<template>

    <!-- toaster: error, success, info -->
    <teleport to="body">
        <TransitionRoot
            as="div"
            enter="transition transform duration-800 ease-out"
            enter-from="translate-x-4 opacity-0" enter-to="translate-x-0 opacity-100"
            leave="transition transform duration-400 ease-in" leave-from="opacity-100" leave-to="opacity-0"
            :show="notify" :class="themeGenerator.borderColor" class="fixed bg-white dark:bg-dark-box border-2 flex z-50 top-0 right-5 shadow-xl my-5 h-auto p-1 rounded-md max-w-[400px] overflow-hidden"
        >
          <div class="w-auto mx-auto mr-1">
            <TransitionChild as="template"
              enter="transition transform duration-400 ease-out"
              enter-from="rotate-90 scale-50 opacity-0" enter-to="rotate-0 scale-100 opacity-100"
              leave="transition transform duration-400 ease-in" leave-from="opacity-100" leave-to="opacity-0"
            >
              <div :class="themeGenerator.iconContainer" class="w-6 h-6 m-1.5 rounded-full border-2 flex justify-center items-center">
                  <i class="fa-solid text-lg" :class="themeGenerator.icon"></i>
              </div>
            </TransitionChild>
          </div>
          <TransitionChild as="template"
            enter="transition transform duration-600 ease-out"
            enter-from="translate-x-8 opacity-0" enter-to="translate-x-0 opacity-100"
            leave="transition transform duration-400 ease-in" leave-from="opacity-100" leave-to="opacity-0"
          >
            <div class="pl-2 pt-2 flex flex-col">
              <div class="flex justify-between">
                <div class="mr-2">
                <h1 class="font-sm text-brand-gray dark:text-gray-300 font-bold">{{content.title}}</h1>

                  <p class="text-prose text-xs dark:text-white py-2">
                    {{ content.message }}
                  </p>
                </div>
                <span @click="notify = !notify" class="mr-2 bg-red-50 hover:bg-red-200 hover:cursor-pointer shadow-md h-6 w-6 rounded-full flex justify-center items-center transition-all">
                  <i class="fa-solid fa-circle-xmark text-red-500"></i>
                </span>
              </div>
            </div>
          </TransitionChild>
        </TransitionRoot>
    </teleport>
</template>

<script>
 import { TransitionRoot, TransitionChild } from '@headlessui/vue'
import { ref, inject, computed } from 'vue'
 import {ThemeGenerator} from "@/library/ThemeGenerator";

export default{
  components: {
    TransitionRoot,
    TransitionChild
  },
    setup(){
      const emitter = inject('emitter')
      const notify = ref(false)
      const type = ref('success')

      let content = ref({
        title:'' || '👋 Hello There, you need a title',
        message:'',
      })
        let themeGenerator = ref({})
        const setTheme = (type) => {
          themeGenerator.value = new ThemeGenerator().toast(type)
        }

        setTheme(type.value)

      emitter.on('toast', (notification)=>{
        content.value.title = notification.title
        content.value.message = notification.message || ''
        type.value = notification.type
        setTheme(type.value)


        notify.value = true;

        if(!notification.alwaysShow){
            setTimeout(()=>{
              notify.value = false;
            },10000)
        }
      })


      return {
        notify,
        themeGenerator,
        content
      }
    }
}
</script>

<template>
  <teleport to="body">
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="close">
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
              <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <div class="relative inline-block bg-white dark:bg-dark-box rounded-lg  text-left shadow-xl transform transition-all sm:my-8 w-full min-h-[500px] align-middle sm:align-middle sm:max-w-4xl sm:w-full">
                <header class="bg-gradient-to-r from-green-500 via-cyan-700 to-cyan-900 dark:bg-gray-700 m-0 flex justify-between text-white px-4 py-3 rounded-md shadow-lg mx-4 -mt-4 z-50">
                  <h3 class="font-bold">
                    <slot name="title">Title here</slot>
                  </h3>
                  <div class="flex space-x-2 items-center">
                    <slot name="title_side"></slot>

                    <button @click="$emit('close',source)" class="bg-gray-200/90 h-6 w-6 text-xs ml-3 text-gray-700 rounded-full flex items-center justify-center shadow hover:bg-gray-200 hover:text-gray-500 hover:scale-105 transition-all">
                      <i class="fa-solid fa-close"></i>
                    </button>
                  </div>
                </header>
                <div class="px-4 pt-4 pb-4">
                 <slot name="body"></slot>
                </div>

                <div class="flex justify-end px-4 py-2 pb-3 mt-5 w-full bottom-0 fixed">
                  <slot name="footer">
                    <button @click="$emit('close', source)" type="button" class="inline-flex items-center px-2.5 py-0.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-brand-green hover:bg-brand-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green">
                      <slot name="done-text">Done</slot>
                    </button>
                  </slot>
                </div>

              </div>

            </TransitionChild>
          </div>
        </Dialog>
    </TransitionRoot>
  </teleport>
</template>

<script>
    import { ref, toRef, inject } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
    import ApplicationLogo from "@/Components/ApplicationLogo";

export default {
  props: {
    show: {type: Boolean, required: true},
    source:{type:String, default: 'page', },
    size: {type: String, default: 'lg'}
  },
  components: {
      ApplicationLogo,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  setup(props) {
    //preliminaries:
    const emitter = inject('emitter')
    const open = toRef(props, 'show')

    //function close(){
    //  $emit('close_modal', props.source)
    //}
    /*
    * listening to close modal event
    * in your initiating component, add the following code:
    * import {inject} from 'vue'
    * const emitter = inject('emitter')
    *
      let showSetting = ref(false)
        onMounted(()=>{
          emitter.on('close_modal', (source)=>{
            if(source === 'table'){
              showSetting.value = false;
              }
           })
        })
    * */

    return {
      open,
      close
    }
  },
}
</script>

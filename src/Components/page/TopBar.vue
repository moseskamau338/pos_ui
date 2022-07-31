<template>
  <div class="flex flex-row items-center justify-between py-1 px-3">
                <div class="hidden md:flex space-x-2">
                     <div class="mt-1 relative rounded-md shadow-sm w-fit">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fa-solid fa-search text-gray-400" aria-hidden="true"></i>
                      </div>
                      <input type="text" name="query" id="query" class="focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-500 dark:bg-dark rounded-md" placeholder="Orders, sales, stores ..." />
                    </div>

                    <!--choose store-->
                    <Listbox as="div" v-model="selected">
                        <div class="mt-1 relative">
                          <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm dark:border-gray-500 dark:bg-dark">
                            <div class="flex items-center">
                              <span aria-label="Online" class="bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full" />
                              <span class="ml-3 block truncate">Name here</span>
                            </div>
                            <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                              <i class="fa-solid fa-sort opacity-50"></i>
                            </span>
                          </ListboxButton>

                          <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                            <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm dark:bg-dark-box">
                              <ListboxOption as="template" v-for="store in stores" :key="store.id" :value="store" v-slot="{ active, selected }">
                                <li :class="[active ? 'text-white bg-green-600' : 'text-gray-900 dark:text-gray-400', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                                  <div class="flex items-center">
                                    <span class="bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full" aria-hidden="true" />
                                    <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                                      {{ store.name }}
                                      <span class="sr-only"> is online</span>
                                    </span>
                                  </div>

                                  <span v-if="selected" :class="[active ? 'text-white' : 'text-green-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                    <i class="fa-solid fa-check"></i>
                                  </span>
                                </li>
                              </ListboxOption>
                            </ListboxOptions>
                          </transition>
                        </div>
                      </Listbox>
                </div>

                <button class="md:hidden h-8 w-8 border-2 border-brand-blue/40 rounded-full focus:ring focus:ring-1 focus:ring-offset-1 flex items-center justify-center">
                    <i class="fa-solid fa-bars text-sm"></i>
                </button>

                 <!--some branding-->
                <ApplicationLogo />


                <div class="py-3 px-4 flex">
                       <Toggler class="h-8 w-8 mr-3 rounded-full border bg-transparent border-gray-500 hover:scale-105 hover:bg-gray-700 hover:text-white flex p-3 justify-center items-center text-xs focus:ring-brand-green focus:ring focus:ring-offset-1" />

                        <Link class="h-8 w-8 mr-3 rounded-full border bg-transparent border-gray-500 hover:scale-105 hover:bg-gray-700 hover:text-white flex p-3 justify-center items-center text-xs focus:ring-brand-green focus:ring focus:ring-offset-1">
                            <i class="fa-solid fa-cash-register"></i>
                        </Link>
                        <span class="h-8 w-8 rounded-full border bg-transparent border-gray-500 flex p-3 justify-center items-center text-xs">MK</span>
                     </div>
            </div>
</template>

<script>
import Toggler from "@/Components/parts/Toggler.vue";
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import {ref, watch} from "vue";
import {find} from "lodash/collection";

export default {
    name: 'TopBar',
    components:{
        Toggler,
        Listbox, ListboxButton,
        ListboxLabel, ListboxOption, ListboxOptions
    },
    setup(){
        const stores = ['One store']
        const selected = ref(find(stores, 'One store'))

        // watch works directly on a ref
        watch(selected, async (newSelected, oldSelected) => {
          // fetch
            // Inertia.get(`/set-current/store/${newSelected.id}`, {
            //     onSuccess: page => {
            //         console.log('response', page)
            //     }
            // })
        })

        return {
          stores, selected,
        }
    }
}
</script>

<template>
    <div class="hidden md:block bg-brand-blue/30 rounded h-[95%] text-gray-300 w-60 ml-32 absolute mt-4">
            <div class="py-3 px-4 w-full flex">
                <span class="h-8 w-8 rounded-full border bg-transparent border-gray-500 flex p-3 justify-center items-center text-xs">MK</span>
                <div class="ml-2">
                    <h1 class="font-bold">Moses Kamau</h1>
                    <small class="text-white/50">Owner
                        <i class="fa-duotone fa-circle text-[8px]"></i>
                        Cakes.co.ke</small>
                </div>
            </div>
            <div class=" bg-brand-blue/30 py-3 px-4 w-full flex text-xs font-bold space-x-5">
                <span class="cursor-pointer hover:text-brand-green">
                    <i class="fa-solid fa-power-off"></i>
                    Logout
                </span>
                <span class="cursor-pointer hover:text-brand-green">
                    <i class="fa-solid fa-cog"></i>
                    Account settings
                </span>
            </div>

            <nav class="flex flex-col mt-14 px-4 space-y-5 overflow-x-hidden">
                <!--indicator:-->


                <a :key="menu.name+'_'+index" v-for="(menu, index) in menus" :href="menu.path" class="flex flex-row hover:translate-x-0.5 transition-all relative items-center" :class="{
                    'text-brand-green' : route.path.includes(menu.path)
                }">
                <span v-if="route.path.includes(menu.path)" class="h-3 w-3 bg-brand-green rounded-r-full absolute -ml-5"></span>
                    <i class="fa-solid text-lg mr-2" :class="menu.icon"></i>
                    <span>{{menu.name}}</span>
                </a>
            </nav>

            <div class="absolute w-full bottom-0 px-3 py-2">
                &copy; VendFood Inc
            </div>

        </div>

</template>

<script>
import {computed} from "vue";
import startsWith from 'lodash/startsWith'
import {paths} from '../SidebarExtentionNav'
import {useRoute} from 'vue-router'

export default{
  name:'SidebarExtension',
  setup(){
    const route = useRoute()
      const menus = computed(()=>{
          return paths.filter(nav =>
              startsWith(nav.path, 'inventory', 1 )
          )
      })

      return {menus, route}
  }
}
</script>


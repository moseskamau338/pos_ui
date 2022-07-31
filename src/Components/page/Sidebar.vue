<template>
    <div class="md:flex hidden h-full w-32 absolute flex-col justify-around items-center">
        <div id="sidebar_mini" class="absolute h-[50%] w-100% my-0 space-y-8">

            <div :key="index" v-for="(item, index) in menus" class="flex flex-row space-x-14 items-center group">
                <a :href="item.path" :class="[
                    isCurrentPath(item.path)? 'bg-green-500/20' : 'bg-[#D6CDCD]/20'
                ]" class="h-12 w-12 flex justify-center items-center rounded-full hover:scale-110 transition-all cursor-pointer peer">
                    <i class="fa-solid text-2xl" :class="[
                        item.icon,
                        isCurrentPath(item.path)? 'text-green-500' : 'text-gray-300'
                     ]"></i>
                </a>
                <span id="tooltip" class="hidden peer-hover:block absolute w-max bg-dark rounded text-white text-sm z-10 px-4 py-2 transition-all">{{ item.title }}</span>
            </div>

        </div>

    </div>
</template>

<script>
import {ref} from "vue";
import startsWith from "lodash/startsWith";
export default{
  name:'Sidebar',
    setup(){
       const menus = ref([
            {title: 'Dashboard', icon:'fa-grid-2', path:'/dashboard'},
            {title: 'Inventory Manager', icon:'fa-boxes-stacked', path:'/inventory'},
            {title: 'Reports', icon:'fa-square-poll-vertical', path:'/reports'},
            {title: 'Manage Users', icon:'fa-users-gear', path:'/users'},
        ])

        const isCurrentPath = (path) => startsWith(path,'/', 1 )
      

        return {menus,isCurrentPath}
    }
}
</script>

<style>

</style>

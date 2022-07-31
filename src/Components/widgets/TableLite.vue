<template>

    <div class="px-4 mt-5 max-w-7xl">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <slot name="header"></slot>
      </div>
      <div class="mt-4 sm:mt-0 md:ml-4 sm:ml-16 sm:flex-none">
        <slot name="actions"></slot>
      </div>
    </div>
    <div class="mt-4 flex flex-col mx-4" v-if="records.length > 0">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle">
          <div class="ring-1 ring-black ring-opacity-5 md:rounded h-[400px] overflow-y-auto">
            <table class="min-w-full table-auto divide-y divide-gray-300">
              <thead class="bg-gray-200/75 backdrop-blur dark:bg-gray-700/75 font-bold sticky z-10 top-0">
              <tr class="py-0">
                <th :key="field.name+index" v-for="(field, index) in headers" scope="col" class="sticky top-0 z-10 px-2 min-w-2 group py-3 text-left text-xs uppercase tracking-wide font-semibold text-brand-blue dark:text-gray-400 shadow-md">
                    <!--<i class="fa-solid fa-arrow-alt-down text-gray-400 cursor-pointer ml-0 mr-1 group-hover:scale-105 group-hover:text-gray-600 transition-all "></i>-->

                    <span v-if="!field.action" class="relative flex items-center justify-between">
                      <input v-show="field.selectable" type="checkbox" class="w-4 h-4 rounded focus:ring-offset-1 focus:ring-churpy-green focus:bg-churpy-green focus:border-churpy-green"/>
                      <span>{{field.label || field.key}}</span>

                    </span>

                  <span v-else class="sr-only">Edit</span>
                </th>

              </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white dark:bg-dark-box h-9 overflow-auto">
              <tr :key="index" v-for="(record, index) in records" class="dark:hover:bg-gray-300/20 hover:bg-gray-200 transition-all cursor-pointer">
                <td :key="ind" v-for="(key, ind) in headers" class="whitespace-nowrap max-w-[150px] overflow-x-hidden truncate px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                  <!--key => row key-->
                  <!--headers[index].key => header index-->
                  <slot :name="key.key" v-bind:record="record">
                    {{record[key.key]}}
                  </slot>
                </td>
                <td v-if="actioned">
                  <slot name="row_actions" v-bind:record="record"></slot>
                </td>

              </tr>
              </tbody>
            </table>
          </div>
          <!--pagination-->
         <Paginator :paginator="paginator" />

        </div>
      </div>
    </div>

      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4" v-else>
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-yellow-700">
              <span v-if="records.length === 0">
                <strong>Table has no records</strong>
              </span>
              <span v-if="records.length > 0">
                Your records structure might be incorrect
              </span>
            </p>
          </div>
        </div>
      </div>

  </div>

</template>

<script>
import Paginator from "@/Components/widgets/Paginator";

export default {
  name: "TableLite",
    components: {Paginator},
    props:{
    headers:{required:true, type:Array},
    actioned:{default:false, type:Boolean},
    records:{
      required:true,
      type:Array,
      default:[]
    },
    paginator:{
      type:Object,
      default:null
    },

  },

}
</script>

<style scoped>

</style>

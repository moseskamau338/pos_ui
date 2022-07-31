<template>
    <div class="flex justify-between">
        <div>
            <h1 class="text-gray-600 text-lg font-bold"> Manage Stores <strong>({{$page.props.user.company.name}})</strong></h1>
        </div>
        <div>
            <button
                @click="showCreate = !showCreate"
                class="px-2 py-0.5 text-white bg-brand-green flex items-center justify-between rounded-sm shadow-md hover:bg-green-600 transition-all focus:ring-2 focus:ring-brand-green focus:ring-offset-1">
                <i class="fa-solid fa-plus mr-2"></i>
                <span>Add store</span>
            </button>
        </div>
    </div>
    <h1 class="mt-5 text-gray-500 text-md font-bold"  v-show="stores.length > 0"> Registered Stores</h1>
    <input type="text" placeholder="Search..."  class="border rounded px-2 mt-1 text-sm py-1 w-[200px] focus:w-[250px] focus:border-brand-green focus:ring-brand-green transition-all"/>
    <div class="overflow-hidden py-3 sm:rounded-md max-h-[400px] overflow-scroll">
        <ul role="list" class="divide-y divide-gray-200" v-if="stores.length > 0">
            <li :key="ind" v-for="(store, ind) in stores" class="group">
              <a href="#" class="block hover:bg-gray-50">
                <div class="px-4 py-4 sm:px-6 py-2">
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium text-green-600 truncate">{{ store.name }}</p>
                    <div class="ml-2 flex-shrink-0 hidden space-x-2 group-hover:flex">
                        <inertia-link class="fa-solid fa-edit text-md text-gray-500 hover:text-gray-700 cursor-pointer"></inertia-link>
                        <inertia-link :href="route('stores.delete', store.id)" method="delete" class="fa-solid fa-trash text-md text-gray-500 hover:text-gray-700 cursor-pointer"></inertia-link>
                    </div>
                  </div>
                  <div class="mt-2 sm:flex sm:justify-between">
                    <div class="sm:flex">
                      <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <!-- Heroicon name: solid/location-marker -->
                        <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                          {{ store.address }}
                      </p>
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <!-- Heroicon name: solid/calendar -->
                      <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                      </svg>
                      <p>
                        Created:
                        <time datetime="2020-01-07">{{ store.created_at.ago }}</time>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
        </ul>
        <div class="text-center" v-else>
            <i class="fa-solid fa-store text-gray-500 text-2xl"></i>

            <h3 class="mt-2 text-sm font-medium text-gray-900">No stores found</h3>
            <p class="mt-1 text-sm text-gray-500">There are no stores registered to this company.</p>

          </div>
    </div>

    <modal :show="showCreate" max-width="sm" :closeable="true">
        <header class="px-2 py-3 border-b border-gray-500">
            <span class="flex items-center text-xl font-bold text-gray-600 dark:text-gray-400">
                <i class="fa-duotone fa-plus mr-2"></i>
                <h1>Create new store</h1>
            </span>
        </header>
         <div class="mt-2 px-2 flex flex-col">
                Stores created here are automatically linked to your company.
            <p v-show="newStore.hasErrors" class="bg-red-100 dark:bg-red-400 dark:text-white mt-3 rounded text-dark text-xs p-2">
             <!--{{newStore.errors}}-->
             <h4 class="text-sm font-bold">Errors:</h4>
                <ul>
                    <li v-for="(error, index) in newStore.errors" v-text="error" :key="index"></li>
                </ul>
            </p>


             <div>
                 <form @submit.prevent="newStore.post('/stores', {onSuccess: onCreateStore, onError:onCreateError})">
                  <div class="sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-2 bg-white dark:bg-dark-box space-y-2 sm:p-6">
                       <label for="company-website" class="block text-sm font-medium text-gray-700 dark:text-gray-400"> Store Name </label>
                          <input required v-model="newStore.name" type="text" name="company-website" id="company-website" class="dark:bg-dark-box focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300 dark:border-gray-500" placeholder="Store 1..." />

                      <div>
                        <label for="about" class="block text-sm font-medium text-gray-700 dark:text-gray-400"> Address </label>
                        <div class="mt-1">
                          <textarea required v-model="newStore.address" id="about" name="about" rows="3" class="dark:bg-dark-box shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 dark:border-gray-500 rounded-md" placeholder="Street 2, Nairobi, Kenya" />
                        </div>
                        <p class="mt-2 text-sm text-gray-500">Where is your store located?</p>
                      </div>
                    </div>
                  </div>
                 <!-- buttons -->
                     <div class="mb-2 flex justify-end">
                         <button type="submit" :disabled="newStore.processing" class="px-3 py-1 bg-green-500 hover:bg-green-500/80 transition-all focus:ring focus:ring-green-500 focus:ring-offset-1 disabled:opacity-75 focus:ring-1 rounded text-white font-bold mr-3">
                             <span v-show="newStore.processing">
                                <i class="animate-spin fa-duotone fa-spinner-third"></i>
                                Processing ..
                             </span>
                             <span v-show="!newStore.processing">
                                Submit
                             </span>
                         </button>
                         <button type="reset" @click="newStore.reset();showCreate = false;" class="px-3 py-1 bg-red-500 hover:bg-red-500/80 transition-all focus:ring focus:ring-red-500 focus:ring-offset-1 focus:ring-1 rounded text-white font-bold">Cancel</button>
                     </div>
                 </form>
             </div>

         </div>
    </modal>

</template>

<script>
import Modal from "../../../Jetstream/Modal";
import {ref,inject} from "vue";
import {Inertia} from "@inertiajs/inertia";
import {useForm} from "@inertiajs/inertia-vue3";
export default {
    name: "Store",
    components: {Modal},
    props: {stores:{required: true, type: Array, default: []}},

    setup(props){
        const emitter = inject('emitter')

        const showCreate = ref(false)
        const submitting = ref(false)
        //form data
        const newStore = useForm({name:'', address:''})

        function onCreateStore(e){
            console.log('Event data: ', e)
            if (e.props.flash.message){
                onCreateError({title: e.props.flash.message.title, message:e.props.flash.message.message, type:e.props.flash.message.type})
                if(e.props.flash.message.type === 'success') {
                    newStore.reset();
                    showCreate.value = false;
                }

                return;
            }
            newStore.reset();
            emitter.emit('open_toast', {title: 'Store created successfully!', type:'success'})
        }
        function onCreateError(notification = {title: 'There was a problem!', type:'danger'}){
            emitter.emit('open_toast', notification)
        }


        return {
            //states
            showCreate, submitting,
            //form data
            newStore,
            onCreateStore
        }
    }
}
</script>


<style scoped>

</style>

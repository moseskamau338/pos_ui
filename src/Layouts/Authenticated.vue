<script>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Sidebar from "@/Components/page/Sidebar.vue";
import SidebarExtension from "@/Components/page/SidebarExtention.vue";
import TopBar from "@/Components/page/TopBar.vue";
import {computed, inject, watch} from "vue";
import Toast from "@/Components/parts/Toast.vue";
export default {
    name:'AuthenticatedLayout',
    components: {Toast, TopBar, SidebarExtension, Sidebar, ApplicationLogo},
    setup(){
        const  emitter = inject('emitter')

        const toast = true
        watch(toast,(newToast, oldToast) => {
            if (newToast){emitter.emit('toast', newToast)}
        })
    }
}

</script>

<template>
    <div class="flex flex-row relative h-screen ">
        <Toast />
        <!--mini sidebar-->
        <Sidebar />
        <!--extension sidebar-->
        <SidebarExtension />
        <!--main container-->
        <div class="md:max-w-7xl overflow-y-auto w-screen md:w-[74%] bg-blue-50 dark:bg-dark dark:text-blue-100 h-screen md:h-[95%] absolute rounded shadow-md px-4 py-2 md:ml-[22rem] md:mt-4">

           <top-bar />

            <!--All the content goes here-->
            <Suspense>
                <template #default>
                <section class="px-3">
                    <div class="mt-3">
                    <slot></slot>
                    </div>
                </section>
                </template>
                <template #fallback>
                     <section class="px-3">
                        <div class="mt-3">
                            <h4>
                                <i class="fa-duotone fa-spinner-third animate-spin mr-2"></i>
                                Loading ...</h4>
                        </div>
                    </section>
                </template>
            </Suspense>

        </div>
    </div>
</template>

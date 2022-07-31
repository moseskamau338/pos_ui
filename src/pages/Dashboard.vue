<script>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';
import Modal from "@/Components/parts/Modal";

export default {
    name: 'Dashboard',
    layout:BreezeAuthenticatedLayout,
    components:{
        Modal,
        Head,
    },
}
</script>

<template>
    <Head title="Dashboard" />
    ksdnldkfn
    <Modal :show="false">
        <template #body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto commodi consequatur dicta eligendi hic in nam non odio officia perspiciatis provident quia quis quo reiciendis sint temporibus unde, veritatis.
        </template>
    </Modal>
</template>

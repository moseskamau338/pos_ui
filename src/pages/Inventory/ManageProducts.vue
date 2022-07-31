<template>
    <h1 class="text-xl font-semibold">Manage products</h1>
    <p class="prose-base">Your products are the main thing. Be sure to <b>label them properly</b> and link the to the correct ingredients.</p>
    <!--no products?-->
    <TableLite v-if="products.data.length > 0" :paginator="paginator" :records="records" :headers="productFields">
        <template #actions>
            <Link :href="route('tenant.products.create')"><CButton variant="dark">+ Create Product</CButton></Link>
        </template>

        <template #tax="{record}">
            ({{record.tax.value}}%) {{record.tax.name}}
        </template>

    </TableLite>

    <empty v-else @add="addProduct">
        <i class="fa-duotone fa-bagel text-3xl mx-auto"></i>
      <span class="mt-2 block text-sm font-medium text-brand-blue"> Create a new product </span>
    </empty>

</template>

<script>
import Authenticated from "@/Layouts/Authenticated";
import Empty from "@/Components/parts/Empty";
import {Inertia} from "@inertiajs/inertia";
import {ref} from "vue";
import TableLite from "@/Components/widgets/TableLite";
import CButton from "@/Components/parts/CButton";
export default {
    name: "ManageProducts",
    components: {CButton, TableLite, Empty},
    layout: Authenticated,
    props:{
      products: {type: Object, default: {}}
    },
    setup(props){

       const productFields = ref([
           {key:'id', label:"#ID"},
           {key:'name', label:"name"},
           {key:'description', label:"Description"},
           {key:'price', label:"Price"},
           {key:'stock_count', label:"Stock"},
           {key:'tax', label:"Tax"},
       ])

        function addProduct(){
            Inertia.get('/inventory/products/create')
        }

        const {data, ...paginator} = props.products

        return {addProduct, productFields, paginator, records: data}
    }
}
</script>

<style scoped>

</style>

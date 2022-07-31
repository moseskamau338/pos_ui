<template>
 <h2 class="my-2 mt-3 font-bold text-2xl mx-3">Let's add a product</h2>
<div class="flex flew-row mx-3">
    <p class="pr-8">Creating a product is seamless, first step is to add specific product details then add the ingredients required to make it. This helps track ingredient stock.
        <!--<b>Alternatively</b>, use the <b>upload function</b> on the right.-->
    </p>

    <button type="button" disabled class="hidden inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all h-fit bg-dark dark:bg-brand-blue text-white disabled:opacity-60" title="This feature is currently unavailable">
        <i class="fa-solid fa-upload mr-2"></i>
        Upload
      </button>
</div>
<div class="mx-3 mt-2">
    <form class="grid grid-cols-1 gap-y-3 md:grid-cols-3 py-2">
        <div class="pr-2 pt-5 col-span-1">
            <FileUploader @added="setImage"/>
            <p class="text-red-500">{{productForm.errors.image}}</p>
        </div>
        <div class="col-span-2">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 px-2">
                <div class="sm:col-span-1">
                      <label for="name" class="block text-sm font-medium text-gray-700 dark:text-blue-100"> Name </label>
                      <div class="mt-1">
                        <input type="text" v-model="productForm.name" name="name" id="name" autocomplete="product-name" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md dark:border-gray-500 dark:bg-dark">
                      </div>
                    <p class="text-red-500">{{productForm.errors.name}}</p>
                    </div>
                <div class="sm:col-span-1">
                      <label for="price" class="block text-sm font-medium text-gray-700 dark:text-blue-100"> Price </label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span class="text-gray-500 sm:text-sm"> KES </span>
                          </div>
                          <input type="number" v-model="productForm.price" name="price" id="price" class="focus:ring-green-500 focus:border-green-500 block w-full px-12 sm:text-sm border-gray-300 rounded-md dark:border-gray-500 dark:bg-dark" placeholder="0.00" />

                          <div class="absolute inset-y-0 right-0 flex items-center">
                            <label for="currency">/</label>
                            <select v-model="productForm.unit" id="currency" name="currency" class="focus:ring-green-500 focus:border-green-500 dark:border-gray-500 dark:bg-dark h-full px-2 py-0 pl-2 pr-7 border border-gray-200 text-gray-500 sm:text-sm rounded">
                              <option value="" disabled selected>Select Unit</option>
                              <option v-for="(unit, index) in units" :value="unit.id">{{ unit.name }}</option>
                            </select>
                          </div>
                        </div>
                      <p class="text-red-500">{{productForm.errors.price}}</p>
                      <p class="text-red-500">{{productForm.errors.unit}}</p>
                    </div>
                <div class="sm:col-span-1">
                  <label for="description" class="block text-sm font-medium text-gray-700 dark:text-blue-100"> Describe it </label>
                  <div class="mt-1">
                    <textarea id="description" v-model="productForm.description" name="description" rows="3" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border border-gray-300 rounded-md dark:border-gray-500 dark:bg-dark"></textarea>
                      <p class="text-red-500">{{productForm.errors.description}}</p>
                  </div>
                </div>
                <div class="sm:col-span-1">
                  <label for="tax" class="block text-sm font-medium text-gray-700 dark:text-blue-100"> Tax </label>
                  <div class="mt-1">
                    <select id="tax" v-model="productForm.tax" name="tax" autocomplete="tax" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md dark:border-gray-500 dark:bg-dark">
                      <option :key="tax.name+index" v-for="(tax, index) in taxes" :value="tax.id">{{tax.value}}% {{tax.name}}</option>
                    </select>
                      <p class="text-red-500">{{productForm.errors.tax}}</p>
                  </div>
                </div>

            </div>

        </div>
    </form>

    <div class="border border-brand-blue/40 px-4 py-2 mt-3 rounded">
        <h3 class="font-semibold">Edit Variations</h3>
        <small>If the product you are creating contains the variations available below, adding those details will help eas the process of selling on the POS screen.</small>
        <section class="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-reverse mt-2">
            <div id="flavours">
                <h4 class="font-bold">Flavours</h4>
                <div class="text-red-500">
                    <ul>
                        <li class="text-red-500" :key="index" v-for="(error,index) in Object.keys(productForm.errors).filter((key) => key.includes('flavour'))">{{productForm.errors[error]}}</li>
                    </ul>
                </div>
                <div class="max-h-64 overflow-y-auto">
                    <table>
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>+/- Cost</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr :key="index" v-for="(field, index) in productForm.flavours">
                        <td>
                            <input type="text" v-model="field.name" name="name" autocomplete="name" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-xs border-gray-300 rounded dark:border-gray-500 dark:bg-dark">
                        </td>
                        <td>
                            <input  v-model="field.cost" type="number" name="cost" id="" autocomplete="given-name" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md dark:border-gray-500 dark:bg-dark">
                        </td>
                        <td>
                            <div class="flex flex-row items-center">
                                <button v-if="productForm.flavours.length>1" @click="remove(productForm.flavours, item=>item === field)" class="bg-red-300 text-red-600 h-4 w-4 p-2 rounded-full hover:shadow-md flex justify-center items-center"><i class="fa-solid fa-close hover:scale-105 text-[10px]"></i></button>

                                <button v-if="index === productForm.flavours.length - 1" @click="addFlavour"><i class="fa-solid fa-plus-circle ml-2 hover:scale-105"></i></button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div>
                <h4 class="font-bold">Attach Weights</h4>
                <div class="text-red-500">
                    <ul>
                        <li class="text-red-500" :key="index" v-for="(error,index) in Object.keys(productForm.errors).filter((key) => key.includes('weight'))">{{productForm.errors[error]}}</li>
                    </ul>
                </div>
                <div class="max-h-64 overflow-y-auto">
                    <table>
                        <thead>
                        <tr>
                            <td>Weight</td>
                            <td>+/- Cost</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr :key="index" v-for="(field, index) in productForm.weights">
                            <td>
                                <input  v-model="field.weight" type="text" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-xs border-gray-300 rounded dark:border-gray-500 dark:bg-dark">
                            </td>
                            <td>
                                <input  v-model="field.cost" type="number" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md dark:border-gray-500 dark:bg-dark">
                            </td>
                            <td>
                                <div class="flex flex-row items-center">
                                    <button v-if="productForm.weights.length>1" @click="remove(productForm.weights, item=>item === field)" class="bg-red-300 text-red-600 h-4 w-4 p-2 rounded-full hover:shadow-md flex justify-center items-center"><i class="fa-solid fa-close hover:scale-105 text-[10px]"></i></button>

                                    <button v-if="index === productForm.weights.length - 1" @click="addWeight"><i class="fa-solid fa-plus-circle ml-2 hover:scale-105"></i></button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>

    <section class="mt-5 pb-32">
        <h1 class="font-bold text-xl">How do you cook it?</h1>
        <p class="prose dark:text-gray-300">Add ingredients below to track ingredient stock while creating products</p>

        <label class="font-bold font-medium mt-5">Product stock count</label>
        <input type="number" v-model="productForm.stock" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md w-fit dark:border-gray-500 dark:bg-dark" placeholder="E.g 20">
        <small>Stock value for this product.</small>
        <p class="text-red-500">{{productForm.errors.stock}}</p>

        <!--Ingredients table-->
        <div class="mt-4">
            <div class="flex flex-col pb-3">
                <label class="font-bold font-medium">Ingredients</label>
                <div class="text-red-500">
                    <ul>
                        <li class="text-red-500" :key="index" v-for="(error,index) in Object.keys(productForm.errors).filter((key) => key.includes('ingredient'))">{{productForm.errors[error]}}</li>
                    </ul>
                </div>
                <small v-if="ingredientError" class="text-red-500">{{ ingredientError }}</small>
                <small class="md:hidden">Scroll horizontally to view in small screens</small>
            </div>
            <div class="flex flex-row md:flex-grow space-x-2 max-h-64 overflow-y-auto border md:w-fit px-6 pb-4 rounded border-brand-blue/40 mt-2">
                <table class="space-y-3 table-fixed md:table-auto">
                    <thead class="w-full">
                        <tr class="rounded shadow">
                        <th class="sticky top-0 bg-blue-100 z-50 py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-2">Ingredient Name</th>
                        <th class="sticky top-0 bg-blue-100 z-50 py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-2">Current Stock</th>
                        <th class="sticky top-0 bg-blue-100 z-50 py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-2">Count</th>
                        <th class="sticky top-0 bg-blue-100 z-50 py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-2">Tax</th>
                        <th class="sticky top-0 bg-blue-100 z-50 py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-2">Totals</th>
                        <th class="sticky top-0 bg-blue-100 z-50 py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-2"></th>
                    </tr>
                    </thead>
                    <tbody class="mt-8 border-separate">
                    <tr :key="index" v-for="(field, index) in productForm.ingredients">
                        <td class="pr-2">
                            <select v-model="field.ingredient" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md dark:border-gray-500 dark:bg-dark">
                              <option>--Ingredient--</option>
                              <option value="1">Ingred 1</option>
                              <option value="2">Ingred 2</option>
                              <option value="3">Ingred 3</option>
                            </select>
                        </td>
                        <td class="pr-2">
                             <input type="number" disabled class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full disabled:opacity-75 sm:text-sm border-gray-300 rounded-md w-fit dark:border-gray-500 dark:bg-dark" placeholder="0.00">
                        </td>
                        <td class="pr-2">
                             <input v-model="field.count" type="number" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md w-fit dark:border-gray-500 dark:bg-dark" placeholder="0.00">
                        </td>
                        <td class="pr-2">
                            <select v-model="field.tax" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md dark:border-gray-500 dark:bg-dark">
                              <option :key="tax.name+index" v-for="(tax, index) in taxes" :value="tax.id">{{tax.value}}% {{tax.name}}</option>
                            </select>
                        </td>
                        <td class="pr-2">
                            <span class="font-bold">KES 0 <sup>.00</sup></span>
                        </td>
                        <td>
                            <div class="flex flex-row items-center">
                                <button v-if="productForm.ingredients.length>1" @click="remove(productForm.ingredients, item=>item === field)" class="bg-red-300 text-red-600 h-4 w-4 p-2 rounded-full hover:shadow-md flex justify-center items-center"><i class="fa-solid fa-close hover:scale-105 text-[10px]"></i></button>

                                <button v-if="index === productForm.ingredients.length - 1" @click="addIngredient"><i class="fa-solid fa-plus-circle ml-2 hover:scale-105"></i></button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="md:mr-32 flex justify-end">
                <table class="table-auto">
                    <thead>
                    <tr>
                        <td class="px-4 py-2 font-bold">Subtotals:</td>
                        <td class="px-4 py-2">KES 0 <sup>.00</sup></td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 font-bold text-lg">Totals:</td>
                        <td class="px-4 py-2 font-bold text-lg">KES 0 <sup>.00</sup></td>
                    </tr>
                    </thead>
                </table>
            </div>


        </div>

        <!--save-->
        <div class="space-x-2 flex mt-8 justify-center md:justify-end md:mr-24">
            <button @click="productForm.reset()" type="button" class="inline-flex items-center px-3 py-1 border border-transparent text-md font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all h-fit bg-red-500 text-white">
                <i class="fa-solid fa-cancel mr-2"></i>
                Cancel
              </button>

            <button @click="productForm.post('/inventory/products',
            {
                preserveScroll: true,
                onSuccess: () => {productForm.reset(); redirect() },
            })" type="button" class="inline-flex items-center px-3 py-1 border border-transparent text-md font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all h-fit bg-brand-green text-white">
                <i class="fa-solid fa-save mr-2"></i>
                Save
              </button>
        </div>
    </section>

</div>
</template>

<script>
import FileUploader from "@/Components/parts/FileUploader";
import Authenticated from "@/Layouts/Authenticated";
import { useForm, usePage } from '@inertiajs/inertia-vue3'
import {remove} from "lodash/array";
import {inject, ref} from "vue";
import {Inertia} from "@inertiajs/inertia";

export default {
    name: "CreateProduct",
    layout: Authenticated,
    components:{
        FileUploader
    },
    props:{
      units:{required: true, type: Array},
      taxes: {required: true, type: Array}
    },

     setup(){
        const helpers = inject('helpers')
        let ingredientError = ref('')

        const productForm = useForm({
          store_id: usePage().props.value.auth.current_store.id,
          image: null,
          name: '',
          description: '',
          price: 0.00,
          stock:1,
          unit:null,
          tax: null,
          flavours:[{name:'', cost:0}],
          weights:[{weight:'', cost:0}],
          ingredients: [{ingredient:'', count:0,tax:''}]
        })

       function redirect(){
            Inertia.visit('/inventory/products')
       }

        function addFlavour(){
            //check previous is filled
            let last = productForm.flavours[productForm.flavours.length-1]
            if(last.name === '' || last.cost === null) return

            productForm.flavours.push({name:'', cost:0})
        }

        function addWeight(){
            //check previous is filled
            let last = productForm.weights[productForm.weights.length-1]
            if(last.weight === '' || last.cost === null) return

            productForm.weights.push({weight:'', cost:0})
        }

        function addIngredient(){
            let last = productForm.ingredients[productForm.ingredients.length-1]

            //check previous is filled
            if(last.ingredient === '' || last.count === null || last.tax === '') return

            //are there duplicates?
            if (helpers.checkUniqueBy(productForm.ingredients, 'ingredient')) {
                remove(productForm.ingredients, item=>item === last)
                ingredientError.value = 'You entered duplicate records, just update the existing one 🙂'
                setTimeout(()=> {
                    ingredientError.value = ''
                }, 5000)
                return
            }

            productForm.ingredients.push({ingredient:'', count:0,tax:''})
        }

        function setImage(e){productForm.image = e[0]}

        return { productForm,setImage, redirect, addFlavour, remove, addWeight, addIngredient, ingredientError }
    }
}
</script>

<style scoped>

</style>

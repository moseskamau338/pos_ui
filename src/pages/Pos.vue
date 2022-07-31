<script>
import Slider from "@/components/widgets/Slider.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import Toggler from "@/Components/parts/Toggler.vue";

export default {
    name: 'POS',
    components:{
        Toggler,
        DropdownLink,
        Dropdown,
        Slider
    },
}
</script>

<template>

      <!--build UI here-->
  <div class="flex-1 flex flex-col min-h-screen py-4 px-2 min-w-full bg-blue-100 dark:bg-dark dark:text-gray-300 overflow-hidden">
    <div class="flex-1 flex items-stretch overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <!-- Primary column -->
      <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-screen flex flex-col lg:order-last">
        <h1 id="primary-heading" class="sr-only">Photos</h1>
        <!-- items control -->
        <div class="flex w-full px-2 items-center py-1.5">
          <div class="w-[300px]">
            <div class="mt-1 relative rounded-md">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <i class="fa-duotone fa-search text-gray-400"></i>
              </div>
              <input type="text" name="query" class="focus:ring-churpy-green dark:focus:border-churpy-green focus:border-churpy-green block w-[96%] focus:w-full transition-all pl-10 sm:text-sm border-gray-300 dark:border-gray-500 dark:bg-dark-box rounded-md" placeholder="Search by name, SKU, id etc">
            </div>
          </div>
          <span class="text-sm cursor-pointer hover:underline ml-3 text-gray-700 dark:text-gray-400">
            <i class="fa-duotone fa-receipt"></i>
            Queue Orders
          </span>
          <span class="text-sm cursor-pointer ml-3 text-gray-700 dark:text-gray-400 flex">
              <span class="flex">
                    <i class="fa-duotone fa-bell"></i>
                    <sup class="-ml-1 h-3 w-3 bg-green-500 flex items-center justify-center rounded-full">
                      <span class="fa-solid fa-circle-small text-xs text-green-700 animate-pulse"></span>
                    </sup>
              </span>
            <span class="hover:underline">
                Kitchen Notifications
            </span>
          </span>
        </div>
      <!-- items list -->
      <div class="h-full mx-2 shadow-inner h-96 grid grid-cols-6 gap-1 grid-flow-row-dense auto-rows-max bg-white dark:bg-dark-box p-4 overflow-y-scroll">
          <!--images here-->
      </div>

      <!-- category section -->
       <Slider class="mb-10" />
      </section>
    </main>

    <!-- Secondary column (hidden on smaller screens) -->
    <aside class="hidden w-[500px] h-full bg-white dark:bg-churpy-night border-l border-gray-200 overflow-y-auto lg:block">
      <!-- Your content -->
      <div class="w-full px-4 py-1 flex items-center justify-between pb-0 border-b-2 border-gray-400 dark:bg-dark-box">
        <div>
          <!--<div class="mt-1 relative rounded-md shadow-sm mb-2">-->
          <!--  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">-->
          <!--    <i class="fa-solid fa-user-plus"></i>-->
          <!--  </div>-->
          <!--  <input type="email" name="email" id="email" class="focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search customer">-->
          <!--</div>-->
          <h3 class="text-lg font-bold my-1">
            <i class="fa-solid fa-user-check mr-2"></i><span>Customer X selected</span></h3>
        </div>

          <div class="flex space-x-4">
              <Toggler />
              <Dropdown>
                  <template #trigger>
                      <button class="flex items-center justify-center rounded-full h-6 w-6 focus:ring focus:ring-brand-green">
                        <i class="fa-solid fa-circle-ellipsis text-xl text-churpy-dark transition-all dark:hover:text-gray-200 dark:text-gray-400"></i>
                      </button>
                  </template>
                  <template #content>
                      <h5 class="px-4 py-1">Actions</h5>
                      <DropdownLink>
                          <span class="flex items-center">
                              <i class="fa-solid fa-hand mr-2"></i>
                              Hold Order
                          </span>
                      </DropdownLink>
                      <DropdownLink>
                          <span class="flex items-center">
                              <i class="fa-solid fa-reply mr-2"></i>
                              Retrieve Order
                          </span>
                      </DropdownLink>
                      <DropdownLink>
                          <span class="flex items-center">
                              <i class="fa-solid fa-close mr-2"></i>
                              Cancel Order
                          </span>
                      </DropdownLink>
                      <DropdownLink>
                          <span class="flex items-center">
                              <i class="fa-solid fa-clock-rotate-left mr-2"></i>
                              Last 10 Orders
                          </span>
                      </DropdownLink>
                  </template>
              </Dropdown>
          </div>
      </div>
      <!--order details area-->
      <div class="h-[60%] overflow-y-scroll dark:bg-dark-box">

        <!--checkout section-->
        <div class="bg-white dark:bg-dark-box mx-2 shadow-lg p-1 my-2 border-l-4 border-green-500">
          <!--top section-->
          <div class="flex justify-between mb-1">
            <div class="flex">
              <i class="fa-solid fa-caret-down mr-2 cursor-pointer"></i>
              <h5 class="text-gray-500 dark:text-gray-300 font-semibold">
                2 Black Forest Cakes
              </h5>
            </div>

            <div class="flex items-center">
              <h3 class="text-xl text-gray-400 dark:text-gray-300">
                <sup class="text-xs">Ksh</sup>
                14,445.00
              </h3>
              <span class="h-6 w-6 rounded-full cursor-pointer hover:drop-shadow-2xl transition-all bg-red-200 flex justify-center items-center ml-2 mr-1 ">
              <i class="fa-duotone fa-trash-alt text-sm text-red-500"></i>
            </span>

            </div>

          </div>
          <!--Adjustments area-->
          <div class="w-full grid grid-cols-3">
            <div class="mx-1 mb-2">
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-400">Quantity</label>
              <div class="mt-1">
                <input type="number" name="number" id="quantity" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full  sm:text-sm border-gray-300 dark:bg-dark-box dark:border-gray-400 rounded-md">
              </div>
            </div>

            <div class="mx-1 mb-2">
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-400">Price</label>
              <div class="mt-1">
                <input type="number" name="number" id="quantity" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full  sm:text-sm border-gray-300 dark:bg-dark-box dark:border-gray-400 rounded-md">
              </div>
            </div>

            <div class="mx-1 mb-2">
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-400">Discount</label>
              <div class="mt-1">
                <input type="number" name="number" id="quantity" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full  sm:text-sm border-gray-300 dark:bg-dark-box dark:border-gray-400 rounded-md">
                <h2 class="text-red-700 text-xs">Discount = -16%</h2>
              </div>
            </div>
            <div class="col-span-2 mx-1 mb-2">
              <label for="comment" class="block text-sm font-medium text-gray-700 dark:text-gray-400">Add your comment</label>
              <div class="mt-1">
                <textarea rows="4" name="comment" id="comment" class="shadow-sm focus:ring-green-500 focus:border-green-500 h-20 block w-full sm:text-sm border-gray-300 dark:bg-dark-box dark:border-gray-400 rounded-md"></textarea>
              </div>
            </div>

          </div>
          <!--footer actions-->
          <div class="p-2 flex justify-between">
            <div>
              <small class="underline text-blue-600 dark:text-green-300">
                <i class="fa-solid fa-weight-hanging"></i>
                Weights & Flavours</small>

            </div>
            <div class="flex space-x-1.5">
              <small class="underline text-blue-600 dark:text-green-300">Modifiers(2)</small>
              <small class="underline text-blue-600 dark:text-green-300">Addons</small>
              <small class="underline text-blue-600 dark:text-green-300">Inventory Details</small>
            </div>
          </div>

        </div>

        <div class="bg-white dark:bg-dark-box mx-2 shadow-lg p-1 my-2 border-l-4 border-green-500">
          <!--top section-->
          <div class="flex justify-between mb-1">
            <div class="flex">
              <i class="fa-solid fa-caret-down mr-2 cursor-pointer"></i>
              <h5 class="text-gray-500 dark:text-gray-300 font-semibold">
                2 Black Forest Cakes
              </h5>
            </div>

            <div class="flex items-center">
              <h3 class="text-xl text-gray-400 dark:text-gray-300">
                <sup class="text-xs">Ksh</sup>
                14,445.00
              </h3>
              <span class="h-6 w-6 rounded-full cursor-pointer hover:drop-shadow-2xl transition-all bg-red-200 flex justify-center items-center ml-2 mr-1 ">
              <i class="fa-duotone fa-trash-alt text-sm text-red-500"></i>
            </span>

            </div>

          </div>
        </div>

        <div class="bg-white dark:bg-dark-box mx-2 shadow-lg p-1 my-2 border-l-4 border-green-500">
          <!--top section-->
          <div class="flex justify-between mb-1">
            <div class="flex">
              <i class="fa-solid fa-caret-down mr-2 cursor-pointer"></i>
              <h5 class="text-gray-500 dark:text-gray-300 font-semibold">
                2 Black Forest Cakes
              </h5>
            </div>

            <div class="flex items-center">
              <h3 class="text-xl text-gray-400 dark:text-gray-300">
                <sup class="text-xs">Ksh</sup>
                14,445.00
              </h3>
              <span class="h-6 w-6 rounded-full cursor-pointer hover:drop-shadow-2xl transition-all bg-red-200 flex justify-center items-center ml-2 mr-1 ">
              <i class="fa-duotone fa-trash-alt text-sm text-red-500"></i>
            </span>

            </div>

          </div>
        </div>

        <div class="bg-white dark:bg-dark-box mx-2 shadow-lg p-1 my-2 border-l-4 border-green-500">
          <!--top section-->
          <div class="flex justify-between mb-1">
            <div class="flex">
              <i class="fa-solid fa-caret-down mr-2 cursor-pointer"></i>
              <h5 class="text-gray-500 dark:text-gray-300 font-semibold">
                2 Black Forest Cakes
              </h5>
            </div>

            <div class="flex items-center">
              <h3 class="text-xl text-gray-400 dark:text-gray-300">
                <sup class="text-xs">Ksh</sup>
                14,445.00
              </h3>
              <span class="h-6 w-6 rounded-full cursor-pointer hover:drop-shadow-2xl transition-all bg-red-200 flex justify-center items-center ml-2 mr-1 ">
              <i class="fa-duotone fa-trash-alt text-sm text-red-500"></i>
            </span>

            </div>

          </div>
        </div>
      </div>

    <!-- summary section -->
    <div class="border-t-2 border-gray-400 dark:bg-dark-box flex flex-col justify-end px-4 py-0 top-0">
      <table>
        <tbody class="text-2xl">
        <tr>
          <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0">Subtotal</th>
          <th scope="row" class="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">Subtotal</th>
          <td class="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">$3,9000,000,000.00</td>
        </tr>
        <tr>
          <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0">Tax</th>
          <th scope="row" class="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden">Tax</th>
          <td class="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">$585.00</td>
        </tr>
        <tr>
          <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-4 text-right text-xl font-semibold text-gray-5=600 sm:table-cell md:pl-0">Total</th>
          <th scope="row" class="pl-4 pr-3 pt-4 text-left text-xl font-semibold text-gray-600 sm:hidden">Total</th>
          <td class="pl-3 pr-4 pt-4 text-right text-xl font-semibold text-gray-600 sm:pr-6 md:pr-0">$4,485.00</td>
        </tr>
        </tbody>
      </table>
      <button class="mt-8 mb-8 w-full font-bold focus:ring-1 focus:ring-offset-1 hover:opacity-95 bg-brand-green dark:bg-dark dark:border dark:border-gray-500 flex justify-between rounded px-2 py-1.5">
        <span class="text-white">
          <span class="text-lg">Pay</span>
          <sub>
            <small>6 items</small>
          </sub>
        </span>

        <span class="text-xl text-white">
          <sup>Ksh</sup> 4,485,998,887,666.00
        </span>
      </button>
    </div>

    </aside>
  </div>
  </div>

</template>

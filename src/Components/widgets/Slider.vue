<template>
 <section class="mt-4 inline-flex px-6 items-center">
          <button @click="scroll_left" class="h-8 w-8 flex items-center bg-white dark:bg-dark-box dark:text-gray-300 justify-center shadow-lg -ml-4 mr-6 rounded-full hover:scale-110 transition-all cursor-pointer focus:ring-churpy-green focus:ring-2">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <div id="categories" class="inline-flex w-full py-2 mr-3 space-x-2 overflow-y-hidden">

            <div :key="ind" class="scroll-smooth bg-white dark:bg-dark-box dark:text-white p-4 max-w-[200px] h-auto whitespace-nowrap shadow-sm rounded" v-for="ind in 10">
              <h3>Categorized by {{ind}}</h3>
            </div>


          </div>

          <button @click="scroll_right" class="h-8 w-8 flex items-center bg-white dark:bg-dark-box dark:text-gray-300 justify-center shadow-lg -mr-4 rounded-full hover:scale-110 transition-all cursor-pointer focus:ring-churpy-green focus:ring-2">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </section>

</template>

<script>
export default {
  name: "Slider"
}
</script>

<script setup>
// visit https://github.com/lukaszflorczak/vue-agile
function scroll_left() {
  let content = document.querySelector("#categories");
  content.scrollLeft -= 100;
}
function scroll_right() {
  let content = document.querySelector("#categories");
  content.scrollLeft += 100;
}

</script>

<style scoped>

</style>

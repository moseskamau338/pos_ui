<template>
  <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
    <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-2" >
        <li>
            <div>
            <Link :href="route('dashboard')" class="text-gray-400 hover:text-gray-500">
                <i class="fad fa-home flex-shrink-0"></i>
                <span class="sr-only">Home</span>
            </Link>
            </div>
        </li>
        <!--<li v-for="(item, index) in (route.meta.breadcrumb ? route.meta.breadcrumb() : [])" :key="index">-->
        <!--     <div class="flex items-center">-->
        <!--        <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
        <!--            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />-->
        <!--        </svg>-->
        <!--        <Link :href="route(item.to || '')" :class="!item.active? 'text-brand-green hover:text-green-600':''"-->
        <!--           class="ml-4 text-sm font-medium text-gray-500">-->
        <!--            {{item.text}}-->
        <!--        </Link>-->
        <!--    </div>-->
        <!--</li>-->
            <li>
             <div class="flex items-center">
                <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                <Link
                   class="ml-4 text-sm font-medium text-gray-500">
                    Dashboard
                </Link>
            </div>
        </li>

        </ol>
    </nav>

    <h1 class="text-xl my-4 font-semibold flex text-brand-gray">
        <!--{{ $page.props.user.name }}-->
    </h1>
    </div>
</template>

<script setup>
import {Link} from "@inertiajs/inertia-vue3";
</script>

<style>

</style>

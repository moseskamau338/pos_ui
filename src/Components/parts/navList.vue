<template>
    <template :key="index" v-for="(item, index) in navs">
        <div
        class="text-slate-600 align-content-bottom text-center text-xs w-full h-6" v-if="item.header">
            <span>{{item.header}}</span>
        </div>

        <div
        class="text-slate-600 group flex items-center px-2 py-1 text-xs rounded-md transition-all hover:translate-x-1" v-if="item.disabled">
            <span>
                <i :class="item.icon" class="mr-3 flex-shrink-0"></i>
            {{ item.title }}
            </span>

        </div>

        <inertia-link v-if="!item.header && !item.disabled" :href="item.route"
              :class="[route().current() === item.route ?
        'bg-gradient-to-br from-brand-green via-green-600 to-emerald-600 text-white shadow-sm mb-4' :
        'text-gray-400 hover:bg-green-400/30 mb-2',
        'group flex items-center px-2 py-1 text-xs rounded-md cursor-pointer transition-all hover:translate-x-1']">
            <i :class="item.icon" class="mr-3 flex-shrink-0"></i>
            {{ item.title }}
        </inertia-link>
    </template>
</template>
<script>

export default {
  props: {
    navs: Array
  },
  setup(props) {
    return {navs: props.navs}
  }
}
</script>

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Home,
        meta:{ 
            title: 'Dashboard'
        }
    },
    {
        path: '/work-area',
        name: 'workArea',
        component: () => import('@/pages/WorkArea.vue'),
        meta:{ 
            title: 'Working Area',
            breadcrumb: (route) => ([
                {
                    text: 'Working Area',
                    active: true,
                },
            ]),
        }
    },
    {
        path: '/pos',
        name: 'pos',
        component: () => import('@/pages/Pos.vue'),
        meta:{ 
            //title: 'POS Screen',
            layout: 'FlatLayout',
            breadcrumb: (route) => ([
                {
                    text: 'POS',
                    active: true,
                },
            ]),
        }
    },
    {
        path: '/reconciliation',
        name: 'recon',
        component: () => import('@/pages/Recon.vue'),
        meta:{ 
            title: 'Reconciliation',
            breadcrumb: (route) => ([
                {
                    text: 'Dashboard',
                    active: false,
                    to: {name: 'dashboard'}
                },
                {
                    text: 'Recon.',
                    active: true,
                },
            ]),
        }
    },

    // default pages
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: () => import('@/pages/error/404.vue') ,
        meta:{
            layout: 'FlatLayout'
        }
    },
    // {
    //     path: '/reconciliation',
    //     name: 'recon',
    //     component: () => import('@/pages/Recon.vue'),
    //     meta:{ 
    //         layout: 'FlatLayout',
    //         title: 'Reconciliation',
    //         breadcrumb: (route) => ([
    //             {
    //                 text: 'Dashboard',
    //                 active: false,
    //                 to: {name: 'dashboard'}
    //             },
    //             {
    //                 text: 'Recon.',
    //                 active: true,
    //             },
    //         ]),
    //     }
    // },
    

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
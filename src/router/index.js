import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('../views/Auth.vue'),
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('../components/Login.vue')
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('../components/Register.vue')

            }
        ]
    }
]

const router = createRouter({
    // Aquí le pondremos desde donde tiene que partir, para poder verlo sin problemas en github Pages
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

export default router; 
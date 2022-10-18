import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    }
]

const router = createRouter({
    // Aquí le pondremos desde donde tiene que partir, para poder verlo sin problemas en github Pages
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router; 
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home'
import Pantheon from '@/views/pantheon'
import Stats from '@/views/stats'
import Teams from '@/views/teams'

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },

    {
        path: '/stats',
        name: 'Stats',
        component: Stats,
    },

    {
        path: '/pantheon',
        name: 'Pantheon',
        component: Pantheon,
    },

    {
        path: '/',
        name: 'Teams',
        component: Teams,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router

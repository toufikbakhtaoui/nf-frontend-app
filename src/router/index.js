import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home'
import Pantheon from '@/views/pantheon'
import Stats from '@/views/stats'
import Teams from '@/views/teams'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },

    {
        path: '/',
        name: 'Stats',
        component: Stats,
    },

    {
        path: '/',
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

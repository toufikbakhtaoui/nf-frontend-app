import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import Pantheon from '../views/pantheon.vue'
import Stats from '../views/stats.vue'
import Teams from '../views/teams.vue'

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

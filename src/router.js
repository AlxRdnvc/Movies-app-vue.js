import Vue from 'vue'
import VueRouter from 'vue-router'

import AppMovies from './pages/AppMovies'

Vue.use(VueRouter)

const routes = [
    {path:'/', redirect: '/movies', name: 'home'},
    {path:'/movies' , component: AppMovies, name:'movies'},
]

export const router = new VueRouter({
    mode: 'history',
    routes
})
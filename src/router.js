import Vue from 'vue'
import VueRouter from 'vue-router'

import AppMovies from './pages/AppMovies'
import AddMovie from './components/AddMovie'
import Login from './components/Login.vue'

Vue.use(VueRouter)

const routes = [
    {path:'/', redirect: '/movies', name: 'home'},
    {path:'/movies' , component: AppMovies, name:'movies'},
    {path:'/add' , component: AddMovie, name:'add-movie'},
    {path: '/login', component: Login, name:'login'}
]

export const router = new VueRouter({
    mode: 'history',
    routes
})
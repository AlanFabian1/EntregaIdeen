import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import listas from "@/views/Listas.vue";
import registrarse from "@/views/Registrarse.vue";
import helloWorld from "@/components/HelloWorld.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/listas',
    name:'listas',
    component: listas
  },{
    path:'/iniciosesion',
    name: 'iniciosesion',
    component: helloWorld
  },{
    path: '/registro',
    name:'registro',
    component: registrarse
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

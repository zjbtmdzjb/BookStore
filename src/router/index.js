import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import List from '@/views/home/list'
import Book from '@/views/home/book'
import Login from '@/views/admin/login'
import Admin from '@/views/admin/admin'

Vue.use(Router)

export default new Router({
  routes: [
    //前台界面
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    //后台界面
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin/',
      component: Admin
    }
  ]
})

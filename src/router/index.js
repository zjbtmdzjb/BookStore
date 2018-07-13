import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import List from '@/views/home/list'
import Book from '@/views/home/book'

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
    }
  ]
})

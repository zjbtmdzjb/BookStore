import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import List from '@/views/home/list'
import Book from '@/views/home/book'
import Order from '@/views/home/order'
import Login from '@/views/admin/login'
import Admin from '@/views/admin/admin'
import Index from '@/views/admin/index'
import Booklist from '@/views/admin/booklist'
import Orderlist from '@/views/admin/orderlist'
import Userlist from '@/views/admin/userlist'
import Adminlist from '@/views/admin/adminlist'

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
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    //后台界面
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin/',
      component: Admin,
      children:[
        { path: '', component: Index },
        { path: 'index',  component: Index },
        { path: 'bookList', component: Booklist },
        { path: 'orderList', component: Orderlist },
        { path: 'userList', component: Userlist },
        { path: 'adminlist', component: Adminlist }
      ]
    }
  ]
})

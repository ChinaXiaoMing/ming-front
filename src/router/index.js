import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import layout from '@/layout/index'
import home from '@/components/Home/layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: home
        }
      ]
    }
  ]
})

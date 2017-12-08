import Vue from 'vue'
import Router from 'vue-router'
import mFrame from '@/components/mFrame'
import HelloWorld2 from '@/components/HelloWorld'
import HelloWorld1 from '@/components/HelloWorld.1'
import Login from '@/components/Login'
import List from '@/components/DomainList'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mFrame',
      component: mFrame,
      children: [
        {
          path: '',
          name: 'HelloWosasrld2',
          component: HelloWorld2
        },
        {
          path: 'h2',
          name: 'HelloWosasrld2',
          component: HelloWorld2
        },
        {
          path: 'list',
          name: 'list',
          component: List,
          meta: { requiresAuth: true }
        },
        {
          path: 'about/:userId',
          name: 'about',
          component: About
        }
      ]
    },
    {
      path: '/h1',
      name: 'HelloWosasrld1',
      component: HelloWorld1
    },
    {
      path: '/login_r',
      redirect: '/login',
      name: 'login',
      component: Login
    }
  ]
})

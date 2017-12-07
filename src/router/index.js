import Vue from 'vue'
import Router from 'vue-router'
import mFrame from '@/components/mFrame'
import HelloWorld2 from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mFrame',
      component: mFrame
    },
    {
      path: '/origin',
      name: 'HelloWosasrld2',
      component: HelloWorld2
    }
  ]
})

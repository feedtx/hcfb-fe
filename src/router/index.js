import Vue from 'vue'
import Router from 'vue-router'
import LandingMenu from '@/views/LandingMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingMenu',
      component: LandingMenu
    }
  ]
})

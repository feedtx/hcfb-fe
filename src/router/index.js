import Vue from 'vue'
import Router from 'vue-router'
import LandingMenu from '@/components/LandingMenu'

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

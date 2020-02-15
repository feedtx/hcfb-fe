import Vue from 'vue'
import Router from 'vue-router'
import LandingMenu from '@/components/LandingMenu'
import RescueRecord from '@/components/RescueRecord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingMenu',
      component: LandingMenu
    },
    {
      path: '/rescue',
      name: 'RescueRecord',
      component: RescueRecord
    }
  ]
})

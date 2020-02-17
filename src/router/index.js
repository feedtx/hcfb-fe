import Vue from 'vue'
import Router from 'vue-router'
import LandingMenu from '@/views/LandingMenu'
import AdminLanding from '@/views/AdminLanding'
import DistLanding from '@/views/DistLanding'
import FRLanding from '@/views/FRLanding'
import WHLanding from '@/views/WHLanding'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingMenu',
      component: LandingMenu
    },
    {
      path: '/admin',
      name: 'AdminLanding',
      component: AdminLanding
    },
    {
      path: '/rescue',
      name: 'FRLanding',
      component: FRLanding
    },
    {
      path: '/warehouse',
      name: 'WHLanding',
      component: WHLanding
    },
    {
      path: '/distribution',
      name: 'DistLanding',
      component: DistLanding
    }
  ]
})

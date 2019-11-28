import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import Webpre from '../components/webpre'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/webpre',
      name: 'webpre',
      component: Webpre
    }
  ]
})

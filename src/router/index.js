import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import mobile from '@/views/index-mobile'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: mobile
    }
  ]
})

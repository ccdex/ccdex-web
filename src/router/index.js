import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import mobile from '@/views/index-mobile'
import test from '@/views/test'
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
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
    
  ]
})

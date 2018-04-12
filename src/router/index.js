import Vue from 'vue'
import Router from 'vue-router'
import mainScreen from '@/components/mainScreen'
import secondScreen from '@/components/secondScreen'
import thirdScreen from '@/components/thirdScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainScreen',
      component: mainScreen
    },
    {
      path: '/scen',
      name: 'secondScreen',
      component: secondScreen
    },
    {
      path: '/admin',
      name: 'thirdScreen',
      component: thirdScreen
    }
  ]
})

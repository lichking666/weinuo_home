import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import WeinuoAdmin from '@/components/WeinuoAdmin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WeinuoAdmin',
      component: WeinuoAdmin
    }
  ]
})

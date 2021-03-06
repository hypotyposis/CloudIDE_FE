import Vue from 'vue'
import Router from 'vue-router'
// import WebIDE from '@/components/WebIDE'
import Monaco from '@/components/Monaco'
import CoEdit from '@/components/CoEdit'
import Monitor from '@/components/Monitor'
import Playground from '@/components/Playground'
import ShowCode from '@/components/ShowCode'
import WXLogin from '@/components/WXLogin'
import MainPage from '@/components/MainPage'

Vue.use(Router)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Monaco',
      component: Monaco,
    },
    {
      path: '/edit',
      name: 'CoEdit',
      component: CoEdit,
    },
    {
      path: '/monitor',
      name: 'Monitor',
      component: Monitor,
    },
    {
      path: '/test',
      name: 'Playground',
      component: Playground,
    },
    {
      path: '/test2',
      name: 'ShowCode',
      component: ShowCode,
    },
    {
      path: '/wxlogin',
      name: 'WXLogin',
      component: WXLogin,
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage,
    }
  ]
})

// export default new Router({
//   routes: [
//     // {
//     //   path: '/cm',
//     //   name: 'WebIDE',
//     //   component: WebIDE,
//     // },
//     {
//       path: '/',
//       name: 'Monaco',
//       component: Monaco,
//     }
//   ]
// })

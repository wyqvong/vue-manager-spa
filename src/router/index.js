import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Layout from '@/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/Home',
    children: [{
      path: 'home',
      name: 'Home',
      component: Home,
      meta: { title: '主页' }
    }]
  },
  {
    path: '/mamber',
    component: Layout,
    redirect: '/mamber/teacher',
    name: 'Mamber',
    meta: { title: '成员列表' },
    children: [
      {
        path: 'grade17',
        name: 'Grade17',
        component: () => import('@/views/member/grade17'),
        meta: { title: '2017级' }
      },
      {
        path: 'grade18',
        name: 'Grade18',
        component: () => import('@/views/member/grade18'),
        meta: { title: '2018级' }
      }
    ]
  },
  {
    path: '/task',
    component: Layout,
    redirect: '/task/project',
    name: 'Task',
    meta: { title: '任务列表' },
    alwaysShow: true,
    hidden: false,
    children: [
      {
        path: 'project',
        name: 'Project',
        component: () => import('@/views/task/project'),
        meta: { title: '项目' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {

// });

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'
Vue.use(VueRouter)

// 所有权限通用路由表
// 如首页和登录页和一些不用权限的公用页面
export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/account',
    component: Layout,
    redirect: '/account/profile',
    name: 'Account',
    hidden: true,
    meta: { title: '用户' },
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/account/profile'),
        meta: { title: '个人中心' }
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('@/views/account/setting'),
        meta: { title: '个人设置' }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/Home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/Home'),
      meta: { title: '主页' }
    }]
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
    children: [{
      path: 'index',
      name: 'Form',
      component: () => import('@/views/form/index'),
      meta: { title: 'Form' }
    }]
  }
]

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

// 实例化vue的时候只挂载constantRouter
const router = new VueRouter({
  routes: constantRouterMap
})

// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = [
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
  { path: '*', redirect: '/404', hidden: true }
]

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { getToken } from '@/utils/auth' // get token from cookie
import '@/styles/index.scss' // 全局样式 css

Vue.config.productionTip = false

Vue.use(ElementUI)

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        console.log(hasGetUserInfo)
        next()
      } else {
        try {
          // get user info
          store.dispatch('user/getInfo').then(res => { // 拉取info
            const roles = res.role
            store.dispatch('user/GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
              router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
              next(to.path) // hack方法 确保addRoutes已完成
            })
          })
          // next()
        } catch (error) {
          // remove token and go to login page to re-login
          store.dispatch('user/resetToken')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

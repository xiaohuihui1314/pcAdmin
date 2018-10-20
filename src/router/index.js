import Vue from 'vue'
import Router from 'vue-router'
// 首页
const home = () =>
  import ( /* webpackChunkName: "home" */ '@/pages/home');
// 首页
const homePage = () =>
  import ( /* webpackChunkName: "homePage" */ '@/pages/home/homePage');
// 用户权限
const user = () =>
  import ( /* webpackChunkName: "user" */ '@/pages/administrators/user');
// 角色权限
const role = () =>
  import ( /* webpackChunkName: "role" */ '@/pages/administrators/role');
// 用户管理
const managementUser = () =>
  import ( /* webpackChunkName: "managementUser" */ '@/pages/management/user');
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      children: [
        // 个人中心
        {
          path: '/',
          component: homePage
        },
        {
          path: '/user',
          name: '用户权限',
          component: user
        },
        {
          path: '/role',
          name: '角色权限',
          component: role
        },
        {
          path: '/managementUser',
          name: '用户管理',
          component: managementUser
        },
      ]
    }
  ]
})

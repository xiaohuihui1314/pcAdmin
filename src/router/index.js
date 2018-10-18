import Vue from 'vue'
import Router from 'vue-router'
// 首页
const Home = () =>
  import ( /* webpackChunkName: "Home" */ '@/components/home/index');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
// 登录页
const login = () =>
  import ( /* webpackChunkName: "login" */ '@/pages/login');
// 注册
const register = () =>
  import ( /* webpackChunkName: "register" */ '@/pages/login/register');
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
// 省市区县
const cityLevel = () =>
  import ( /* webpackChunkName: "cityLevel" */ '@/pages/basicInformation/cityLevel');
// 银行代码
const bankCode = () =>
  import ( /* webpackChunkName: "bankCode" */ '@/pages/basicInformation/bankCode');
// 添加、审核
const addAudits = () =>
  import ( /* webpackChunkName: "addAudits" */ '@/pages/organizational/addAudits');
// 机构列表
const mechanismList = () =>
  import ( /* webpackChunkName: "bankCode" */ '@/pages/organizational/mechanismList');
// 合同管理
const contract = () =>
  import ( /* webpackChunkName: "contract" */ '@/pages/organizational/contract');
// 商户管理-添加审核
const businessAddAudits = () =>
  import ( /* webpackChunkName: "businessAddAudits" */ '@/pages/business/addAudits');
// 商户管理-商户列表
const businessList = () =>
  import ( /* webpackChunkName: "businessList" */ '@/pages/business/businessList');
// 商户管理-福利发放
const welfareGrant = () =>
  import ( /* webpackChunkName: "welfareGrant" */ '@/pages/business/welfareGrant');
// 商户管理-发放审核
const issuanceAudit = () =>
  import ( /* webpackChunkName: "issuanceAudit" */ '@/pages/business/issuanceAudit');
// 商户管理-合同管理
const businessContract = () =>
  import ( /* webpackChunkName: "businessContract" */ '@/pages/business/businessContract');
// 商户管理-结算管理
const settlement = () =>
  import ( /* webpackChunkName: "settlement" */ '@/pages/business/settlement');
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: login,
    },
    {
      path: '/register',
      name: '注册',
      component: register,
    },
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
        {
          path: '/cityLevel',
          name: '省市区县',
          component: cityLevel
        },
        {
          path: '/bankCode',
          name: '银行代码',
          component: bankCode
        },
        {
          path: '/addAudits',
          name: '添加/审核',
          component: addAudits
        },
        {
          path: '/mechanismList',
          name: '机构列表',
          component: mechanismList
        },
        {
          path: '/contract',
          name: '合同管理',
          component: contract
        },
        {
          path: '/businessAddAudits',
          name: '添加/审核 ',
          component: businessAddAudits
        },
        {
          path: '/businessList',
          name: '商户列表',
          component: businessList
        },
        {
          path: '/welfareGrant',
          name: '福利发放',
          component: welfareGrant
        },
        {
          path: '/issuanceAudit',
          name: '发放审核',
          component: issuanceAudit
        },
        {
          path: '/businessContract',
          name: '合同管理 ',
          component: businessContract
        },
        {
          path: '/settlement',
          name: '结算管理',
          component: settlement
        },
      ]
    }
  ]
})

const state = {
  menus: [
    {
      name: '管理员',
      list: [
        {
          name: '用户权限',
          url: "user"
        },
        
      ]
    },
    {
      name: '用户管理',
      url: "managementUser",
    },
    {
      name: '基础资料',
      list: [
        {
          name: '省市区县',
          url: "cityLevel"
        },
        {
          name: '银行代码',
          url: "bankCode"
        },
      ]
    },
    {
      name: '机构管理',
      list: [
        {
          name: '添加/审核',
          url: "addAudits"
        },
        {
          name: '机构列表',
          url: "mechanismList"
        },
        {
          name: '合同管理',
          url: "contract"
        },
      ]
    },
    {
      name: '商户管理',
      list: [
        {
          name: '添加/审核 ',
          url: "businessAddAudits"
        },
        {
          name: '商户列表',
          url: "businessList"
        },
        {
          name: '福利发放',
          url: "welfareGrant"
        },
        {
          name: '发放审核',
          url: "issuanceAudit"
        },
        {
          name: '合同管理 ',
          url: "businessContract"
        },
        {
          name: '结算管理',
          url: "settlement"
        },
      ]
    },
  ],
  menuList: JSON.parse(localStorage.getItem("menuList")) || []
};
// getters
const getters = {
  menus: state => state.menus,
  menuList: state => state.menuList,
};
const actions = {
  Action_Menu_List({ commit }, list){
    commit("set_Menu_List", list)
  }
};
// mutations
const mutations = {
  set_Menu_List(state, list){
    state.menuList = list;
    localStorage.setItem("menuList", JSON.stringify(list))
  }
};
export default {
  state,
  getters,
  actions,
  mutations
}

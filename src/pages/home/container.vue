<template>
  <el-container>
    <el-header>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-show="SubMenuName" v-if="SubMenuName">{{SubMenuName}}</el-breadcrumb-item>
        <el-breadcrumb-item :href="thirdClass.path" v-show="thirdClass.name">{{thirdClass.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container-content" v-show="SubMenuName&&menuList.length">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="menu.name" :name="menu.name" :url="menu.url" v-for="(menu,index) in menuList" :key="index">
          <router-view></router-view>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-container>
</template>

<script>
  import  {mapGetters} from 'vuex';
  export default {
    data(){
      return {
        thirdClass: {
          name: null,
          path: null
        },
        activeName: ''
      }
    },
    computed: {
      ...mapGetters({
        SubMenuName: 'SubMenuName',
        menuList: 'menuList',
      })
    },
    watch: {
      '$route': function(route) {
        this.activeName = route.name;
        this.thirdClass.name = route.name;
        this.thirdClass.path = route.path;
        this.checkRouter();
      }
    },
    mounted(){
      this.thirdClass.name = this.$route.name;
      this.thirdClass.path = this.$route.path;
      this.checkRouter();
    },
    methods: {
      checkRouter(){
        if (!this.thirdClass.name) {
          this.$store.dispatch('Action_Menu_Name', null);
        }
      },
      handleClick(tab) {
        const selectTab = this.menuList.filter(i => i.name === tab.name);
        this.$router.push({ path: selectTab[0].url });
      }
    }
  };
</script>
<style lang="scss" scoped>
  .el-header {
    text-align: right;
    font-size: 12px;
    background-color: #fafafb;
  }

  .breadcrumb {
    padding: 20px;
    background-color: #f1f1f2;
  }

  .container-content {
    padding: 20px;
  }
</style>

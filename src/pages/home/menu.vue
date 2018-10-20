<template>
  <el-aside class="menu-wrap">
    <img src="../../assets/logo.png">
    <div class="banner">后台管理系统</div>
    <el-menu @select="getSubMenuName">
      <template v-for="(menu, index) in menus">
        <el-submenu :index="index+''" :key=index v-if="menu.list&&menu.list.length">
          <template slot="title">
            <i class="el-icon-setting"></i>{{menu.name}}
          </template>
          <el-menu-item
            :index="menu.name+'-'+key"
            v-for="(label, key) in menu.list"
            :key="index+'-'+key">
            <router-link :to="{path:label.url}" tag="div">
              {{label.name}}
            </router-link>
          </el-menu-item>
        </el-submenu>
        <router-link :to="{path:menu.url}" tag="div" v-if="!menu.list">
          <el-menu-item :index="menu.name+'-'+index" :key=index>
            <i class="el-icon-menu"></i>
            <span slot="title">{{menu.name}}</span>
          </el-menu-item>
        </router-link>

      </template>
    </el-menu>
  </el-aside>
</template>

<script>
  import  {mapGetters} from 'vuex';
  export default {
    data(){
      return {}
    },
    computed: {
      ...mapGetters({
        menus: 'menus',
      })
    },
    methods: {
      getSubMenuName(name){
        const breadcrumb = name.substr(0, name.indexOf("-")),
          breadcrumbList = this.menus.filter(item => item.name === breadcrumb);
        //  存breadcrumb的name值
        this.$store.dispatch('Action_Menu_Name', breadcrumb);
        //  存breadcrumb的选中的list
        if (breadcrumbList.length) {
          this.$store.dispatch('Action_Menu_List', breadcrumbList[0].list || breadcrumbList);
        }
      }
    }
  };
</script>
<style scoped lang="scss">
  .menu-wrap {
    width: 260px;
    background-color: rgba(59, 58, 63, 1) !important;
    & > img {
      display: block;
      width: 50px;
      margin: 15px auto 0;
    }

    .banner {
      margin: 0;
      padding: 25px;
      text-align: center;
      color: #fff;
    }
  }
</style>
<style lang="scss">
  .el-menu {
    border-right: none;
    background-color: rgba(59, 58, 63, 1);
    .el-menu-item:focus, .el-menu-item:hover {
      background-color: rgba(59, 58, 63, 1);
    }
    .el-menu {
      background-color: rgba(59, 58, 63, 1);
    }
    .el-submenu__title, .el-menu-item {
      color: #fff;
      &:hover {
        background-color: rgba(59, 58, 63, 1);
        color: aqua;
      }
    }

  }
</style>

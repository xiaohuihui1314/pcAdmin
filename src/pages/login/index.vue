<template>
  <div class="login-wrap">
    <header class="login-header">
      <div class="login-title">登录</div>
    </header>
    <section class="login-form-wrap">
      <div class="login-form">
        <el-form ref="form" :model="login" label-width="80px">
          <el-input placeholder="请输入用户名" v-model="login.uin" style="margin-bottom: 15px"></el-input>
          <el-input placeholder="请输入密码" type="password" v-model="login.pwd" style="margin-bottom: 15px"></el-input>
          <p class="login-message">{{message}}</p>
          <el-button class="login-btn" type="primary" @click="goLogin">登录</el-button>
        </el-form>
      </div>
    </section>
    <footer class="login-footer">
      <div class="company-code">
        2017.7.12-2017 © HUIHUI
      </div>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/login.css";
</style>
<script>
  import jsencrypt from '@/util/jsencrypt';
  export default {
    data () {
      return {
        login: {
          server_no: 100004,
          uin: "17671676150",
          pwd: "huihui3210"
        },
        message: null,
        dateData: {}
      }
    },
    mounted(){
      this.getDate();
    },
    methods: {
      async  goLogin () {
        Object.assign(this.login, {
          pwd: jsencrypt.getUrlpwd('huihui3210', this.dateData.datetime, this.jsencrypt),
        });
        const res = await  this.$get('/user_login.cgi', this.login);
        console.log(this.$xmlJSON.xml2js(res).root)
      },
      async getDate(){
        const res = await  this.$post('get_datetime.cgi');
        this.dateData = this.$xmlJSON.xml2js(res).root;
      }
    }
  }
</script>

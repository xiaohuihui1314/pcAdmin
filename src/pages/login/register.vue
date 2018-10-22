<template>
  <div class="login-wrap">
    <header class="login-header">
      <div class="login-title">注册</div>
    </header>
    <section class="login-form-wrap">
      <div class="login-form">
        <el-form ref="form" :model="registerObj" label-width="80px">
          <!--<el-input placeholder="请输入用户名" v-model="registerObj.uid" style="margin-bottom: 15px"></el-input>-->
          <!--<el-input placeholder="请输入密码" type="password" v-model="registerObj.pwd" style="margin-bottom: 15px"></el-input>-->
          <!--<p class="login-message">{{message}}</p>-->
          <el-button class="login-btn" type="primary" @click="geRegister">注册</el-button>
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
  import codeKey from '@/util/verycode-key';
  export default {
    data () {
      return {
        registerObj: {
          server_no: 100003,
          name: 'huihui',
          mobile: '17671676150',
          user_type: 1,
          pwd: "huihui3210",
          pwd_repeat: "huihui3210",
          verify_code: "191119",
        },
        message: null
      }
    },
    mounted(){
      //      this.geCode();
    },
    methods: {
      async  geCode () {
        const rand = Math.random() + '';
        const res = await  this.$get('/send_phone_vericode.cgi', {
          server: 100002,
          op_id: 0, // 0注册 1提现 2其它
          op_type: 1, // 1、手机验证码 2、邮箱验证码
          op_stat: 1, // 1、新手机号或者邮箱 2、用户原有的
          mobile: 17671676150,
          code: rand,
          vm: codeKey(17671676150, rand)
        });
        console.log(res)
      },
      async  geRegister () {
        const res = await  this.$get('/create_user_info.cgi', this.registerObj);
        console.log(res)
      },
    }
  }
</script>

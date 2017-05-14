<template>
  <div class="login-wrap">
    <div class="ms-title">后台管理系统</div>
    <div class="ms-login">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="80px" label-position="labelPosition">
        <el-form-item prop="account" label="用户名">
            <el-input v-model="loginForm.account" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
            <el-input type="password" placeholder="password" v-model="loginForm.password" @keyup.enter.native="submitForm('loginForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from '../../utils/http.js'
export default {
  data: function(){
    return {
      labelPosition: 'right',
      loginForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      let params = {
        account: this.loginForm.account,
        password: this.loginForm.password
      }
      const self = this;
      const auth = this.make_base_auth(this.account, this.password)
      self.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/admins/login', params).then(res => {
            if(res.data.code === 0) {
              localStorage.setItem('token', res.data.data)
              localStorage.setItem('username', this.loginForm.account)
              this.$message.success(`登录${res.data.message}`)
              this.$router.push({
                name: 'ProList'
              })
            }
          }).catch(err => {
            return console.log(err)
          })
        } else {
          this.$message.error('表单验证失败！')
          return false;
        }
      });
    },
    make_base_auth(user, password) {
      var tok = user + ':' + password;
      var hash = window.btoa(tok);
      return "Basic " + hash;
    }
  }
}
</script>

<style scoped>
.login-wrap{
    position: relative;
    width:100%;
    height:100%;
    background: #324157;
}
.ms-title{
    position: absolute;
    top:50%;
    width:100%;
    margin-top: -200px;
    text-align: center;
    font-size:30px;
    color: #fff;
}
.ms-login{
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  width:400px;
  padding:40px;
  border-radius: 5px;
  background: #fff;
    
}
.login-btn{
    text-align: center;
}
.login-btn button{
    width:100%;
    height:36px;
}
</style>
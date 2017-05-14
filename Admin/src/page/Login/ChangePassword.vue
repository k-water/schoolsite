<template>
  <div class="wrap">
    <div class="contain">
      <p class="title">修改密码</p>
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="form">
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from '../../utils/http.js'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let params = {
        password: this.ruleForm2.pass
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.put('/admins/edit', params).then(res => {
            if(res.data.code === 0) {
              this.$message.success(`修改${res.data.message}`)
              setTimeout(() => {
                this.$router.push({
                  name: 'Login'
                })
                localStorage.removeItem('username')
                localStorage.removeItem('token')
              },1000)
            }else {
              this.$message.error(`修改${res.data.message}`)
            }
          }).catch(err => {
            return console.log(err)
          })
        } else {
          this.$message.error('表单验证失败')
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  background: #324157;
  display: flex;
  justify-content: center;
  align-items: center;
  .contain {
    width: 600px;
    display: flex;
    background: #fff;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title {
      padding: 10px;
      font-size: 20px;
      line-height: 150%;
      background-color: rgba(32,160,255,.1);
      border-color: rgba(32,160,255,.2);
      color: #20a0ff;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .form {
      width: 80%;
    }
  }
}
</style>

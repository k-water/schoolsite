<template>
  <div id="footers">
    <el-row>
      <div class="footer-info">
        <el-col :span="8" class="left-info">
          <p>咨询电话：15717481021 申老师</p>
          <p>咨询QQ：352403875 </p>
          <p>咨询微信号：xiaohui352403875</p>
          <!--
          <p style="margin-top:30px">网站备案号：湘ICP备11000169号-6</p>
          
          <p>湖南都市职业学院 版权所有: ©侵权必究</p>
          -->
        </el-col>
        <el-col :span="8" class="QRcode">
          <div class="QR-img">
            <img src="https://oc1gyfe6q.qnssl.com/17-5-17/12922047-file_1495034016202_77a4.png" alt="">
          </div>
        </el-col>
        <el-col :span="8" class="word">
          <h3>在线留言{{formWord.name}}</h3>
          <el-form :label-position="labelPosition" label-width="0px" :model="formWord" ref="formWord">
            <el-form-item label="">
              <el-input v-model="formWord.name" placeholder="名称"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input v-model="formWord.phone" placeholder="手机"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input v-model="formWord.remark" placeholder="备注"></el-input>
            </el-form-item>
            </el-form-item>
            <el-form-item style="float: right">
              <el-button type="primary" @click="submitForm()">提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </div>
    </el-row>
  </div>
</template>
<script>
  import axios from '../utils/http.js'
  import qs from 'qs'
  export default {
    name: 'Footers',
    data() {
      return {
        labelPosition: 'right',
        formWord: {
          name: '',
          phone: '',
          remark: ''
        }
      }
    },
    methods: {
      matchPhone() {
        return !!this.formWord.phone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)
      },
      submitForm() {
        if(this.formWord.name === '') {
          this.$notify.error({
            title: '错误',
            message: '姓名不能为空'
          })
        }else if(this.formWord.phone === '') {
           this.$notify.error({
            title: '错误',
            message: '手机号码不能为空'
          })
        }else if(this.matchPhone() === false) {
          this.$notify.error({
            title: '错误',
            message: '手机号码格式错误'
          })
        } else if(this.formWord.remark === ''){
          this.$notify.error({
            title: '错误',
            message: '备注不能为空'
          })
        }else {
          axios.post('/visitorMessages', this.formWord).then(res => {
            this.$notify({
              title: res.data.message,
              message: `提交${res.data.message}`,
              type: 'success',
              duration: 2000
            })
          }).catch(err => {
            this.$notify({
              title: res.data.message,
              message: `提交${res.data.message}`,
              type: 'error'
            })
          })
          this.formWord.name = ''
          this.formWord.phone = ''
          this.formWord.remark = ''          
          
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .el-row {
    margin-top: 20px;
    height: 210px;
    background: #1c1c1c;
    .footer-info {
      width: 1000px;
      margin: 0 auto;
      .left-info {
        padding: 20px;
        p {
          font-size: 14px;
          line-height: 150%;
          color: #ddd;
          font-family: "Microsoft YaHei";
        }
      }
      .QRcode {
        display: flex;
        justify-content: center;
        .QR-img {
          width: 150px;
          height: 150px;
          margin-top: 20px;
        }
      }
      .word {
        h3 {
          color: #ddd;
          padding: 20px 0 0 0;
        }
      }
    }
  }
  .el-form-item {
    margin-bottom: 5px;
  }
</style>

<template>
  <div id="apply">
    <el-row class="header-img">
      <el-col :span="24">
        <a href="javascript:;">
          <img src="https://oc1gyfe6q.qnssl.com/17-5-9/77656568-file_1494295931179_7525.jpg" alt="">
        </a>
      </el-col>
    </el-row>
    <el-row class="common-h">
      <el-col :span="6">
        <ul class="list-ul">
          <li class="li-first">
            <span>学校动态</span>
          </li>
          <li v-for="item in jobInfo.content" :key="item" @click="getJobId(item.id)">
            <router-link :to="'/college/jobInfo/' + item.id"> {{item.title}} </router-link>
            <span> {{item.postedTime}} </span>
          </li>
        </ul>
      </el-col>
      <el-col :span="16" :offset="2" style="margin-top: 50px">
        <el-form :label-position="labelPosition" label-width="100px" :model="formApply" ref="formApply" :rules="rules">
          <el-form-item label="姓名" prop="studentName">
            <el-input v-model="formApply.studentName" placeholder="请填写您的姓名"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="formApply.gender">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="手机" prop="phone">
            <el-input v-model="formApply.phone" placeholder="请填写您的手机号码"></el-input>
          </el-form-item>
          <el-form-item label="籍贯" prop="nativePlace">
            <el-input v-model="formApply.nativePlace" placeholder="请填写您的籍贯"></el-input>
          </el-form-item>
          <el-form-item label="毕业中学" prop="graduationSchool">
            <el-input v-model="formApply.graduationSchool" placeholder="请填写您毕业的中学"></el-input>
          </el-form-item>
          <el-form-item label="身份证号码" prop="idCard">
            <el-input v-model="formApply.idCard" placeholder="请填写您的身份证号码"></el-input>
          </el-form-item>

          <el-form-item label="备注" prop="remark">
            <el-input type="textarea" v-model="formApply.remark" placeholder="可填意向专业，特殊情况，备用联系方式"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('formApply')">提交</el-button>
            <el-button @click="resetForm('formApply')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import axios from '../../utils/http.js'
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'Apply',
    data() {
      let checkName = (rule,value,callback) => {
        if(!value) {
          return callback(new Error('请输入您的姓名!'))
        }else {
          callback()
        }
      }
      let checkSex = (rule,value,callback) => {
        if(!value) {
          return callback(new Error('请选择您的性别!'))
        }else {
          callback()
        }
      }
      let checkPhone = (rule,value,callback) => {
        if(!value) {
          return callback(new Error('请填写您的手机号码!'))
        } else if(this.matchPhone() === false) {
          return callback(new Error('您的手机号码格式错误!'))
        } else {
          callback()
        }
      }
      let checkAddress = (rule,value,callback) => {
        if(!value) {
          return callback(new Error('请输入您的籍贯!'))
        }else {
          callback()
        }
      }
      let checkSchool = (rule,value,callback) => {
        if(!value) {
          return callback(new Error('请输入您毕业的中学!'))
        }else {
          callback()
        }
      }
      let checkIdcard = (rule,value,callback) => {
        if(!value) {
          return callback(new Error('请输入您的身份证号码!'))
        }else if (this.matchIdCard() === false) {
          return callback(new Error('请输入您的身份证号码格式错误!'))
        } else {
          callback()
        }
      }
      let checkRemark = (rule,value,callback) => {
        if(!value) {
          return callback(new Error('请填写备注信息!'))
        }else {
          callback()
        }
      }
      return {
        labelPosition: 'left',
        formApply: {
          studentName: '',
          gender: '',
          phone: '',
          nativePlace: '',
          graduationSchool: '',
          idCard: '',
          remark: ''
        },
        rules: {
          studentName: [
            {required: true, validator: checkName, tigger: 'blur'}
          ],
          gender: [
            {required: true, validator: checkSex, tigger: 'blur'}
          ],
          phone: [
            {required: true, validator: checkPhone, tigger: 'blur'}
          ],
          nativePlace: [
            {required: true, validator: checkAddress, tigger: 'blur'}
          ],
          graduationSchool: [
            {required: true, validator: checkSchool, tigger: 'blur'}
          ],
          idCard: [
            {required: true, validator: checkIdcard, tigger: 'blur'}
          ],
          remark: [
            {required: true, validator: checkRemark, tigger: 'blur'}
          ]
        }
      }
    },
    created() {
      this.getJobInfo({
        page: 0,
        size: 3,
        type: 2
      })
    },
    computed: {
      ...mapGetters(['jobInfo'])
    },
    methods: {
      matchPhone() {
        return !!this.formApply.phone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)
      },
      matchIdCard() {
        return !!this.formApply.idCard.match(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/)
      },
      ...mapActions(['getJobInfo']),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post('/entryForms', this.formApply).then(res => {
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
                type: 'success',
                duration: 2000
              })
            })
            setTimeout(() => {
              this.$refs[formName].resetFields()
            }, 200)
          } else {
            this.$notify({
              title: '错误',
              message: `表单验证失败`,
              type: 'error',
              duration: 2000
            })
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .header-img {
    width: 980px;
    margin: 10px auto;
    a {
      display: block;
    }
  }
  .list-ul {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    li {
      display: block;
      height: 45px;
      line-height: 45px;
      padding: 5px;
    }
    .li-first {
      border-bottom: 1px solid #ddd;
      span {
        color: #C40000;
        font: 20px/150% 'Microsoft YaHei';
        position: relative;
        padding-left: 10px;
        &:before {
          content: "|";
          position: absolute;
          font-weight: 800;
          top: -2px;
          left: -5px;
        }
      }
    }
    li:not(.li-first) {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dashed #ddd;
      span {
        display: block;
        color: #666;
        height: 36px;
        line-height: 36px;
        text-align: right;
        width: 50%;
      }
      a {
        width: 40%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        color: #666;
        height: 36px;
        line-height: 36px;
        &:hover {
          color: #e01f19 !important;
          cursor: pointer;
        }
      }
    }
  }
</style>

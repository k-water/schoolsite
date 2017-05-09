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
          <li v-for="item in sLists" :key="item">
            <a href="javascript:;"> {{item.title}} </a>
            <span> {{item.time}} </span>
          </li>
        </ul>
      </el-col>
      <el-col :span="16" :offset="2" style="margin-top: 50px">
        <el-form :label-position="labelPosition" label-width="100px" :model="formApply" ref="formApply" :rules="rules">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="formApply.name" placeholder="请填写您的姓名"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="formApply.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="籍贯" prop="address">
            <el-input v-model="formApply.address" placeholder="请填写您的籍贯"></el-input>
          </el-form-item>
          <el-form-item label="毕业中学" prop="school">
            <el-input v-model="formApply.school" placeholder="请填写您毕业的中学"></el-input>
          </el-form-item>
          <el-form-item label="身份证号码" prop="idcard">
            <el-input v-model="formApply.idcard" placeholder="请填写您的身份证号码"></el-input>
          </el-form-item>
          <el-form-item label="专业" prop="profession">
            <el-select v-model="formApply.profession" placeholder="" style="width: 100%;">
              <el-option label="专业一" value="sf"></el-option>
              <el-option label="专业二" value="cs"></el-option>
            </el-select>
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
        }else {
          callback()
        }
      }
      let checkProfession = (rule,value,callback) => {
        if(!value) {
          return callback(new Error('请选择您的专业!'))
        }else {
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
       "sLists": [
          {
            "title": "计算机软件技术就业前景", 
            "time": "2017-05-09"
          }, 
          {
            "title": "计算机软件技术就业前景", 
            "time": "2017-05-09"
          }, 
          {
            "title": "计算机软件技术就业前景", 
            "time": "2017-05-09"
          }
        ],
        labelPosition: 'left',
        formApply: {
          name: '',
          sex: '',
          address: '',
          school: '',
          idcard: '',
          profession: '',
          remark: ''
        },
        rules: {
          name: [
            {required: true, validator: checkName, tigger: 'blur'}
          ],
          sex: [
            {required: true, validator: checkSex, tigger: 'blur'}
          ],
          address: [
            {required: true, validator: checkAddress, tigger: 'blur'}
          ],
          school: [
            {required: true, validator: checkSchool, tigger: 'blur'}
          ],
          idcard: [
            {required: true, validator: checkIdcard, tigger: 'blur'}
          ],
          profession: [
            {required: true, validator: checkProfession, tigger: 'blur'}
          ],
          remark: [
            {required: true, validator: checkRemark, tigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            this.$alert('表单验证失败', '提示', {
              type: 'warning',
              confirmButtonText: '确定',
            });
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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

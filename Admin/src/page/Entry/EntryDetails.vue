<template>
  <div id="entrydetails">
    <div class="content">
      <el-row>
        <header>{{this.entryInfoDetails['studentName']}}的个人详情</header>
        <el-form :label-position="labelPosition" label-width="100px" :model="formApply" ref="formApply">
          <el-form-item label="姓名" prop="studentName">
            <el-input v-model="formApply.studentName" placeholder="请填写您的姓名" disabled></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="formApply.gender" disabled>
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="手机" prop="phone">
            <el-input v-model="formApply.phone" placeholder="请填写您的手机号码" disabled></el-input>
          </el-form-item>
          <el-form-item label="籍贯" prop="nativePlace">
            <el-input v-model="formApply.nativePlace" placeholder="请填写您的籍贯" disabled></el-input>
          </el-form-item>
          <el-form-item label="毕业中学" prop="graduationSchool">
            <el-input v-model="formApply.graduationSchool" placeholder="请填写您毕业的中学" disabled></el-input>
          </el-form-item>
          <el-form-item label="身份证号码" prop="idCard">
            <el-input v-model="formApply.idCard" placeholder="请填写您的身份证号码" disabled></el-input>
          </el-form-item>

          <el-form-item label="备注" prop="remark">
            <el-input type="textarea" v-model="formApply.remark" placeholder="可填意向专业，特殊情况，备用联系方式" disabled></el-input>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'EntryDetails',
  data() {
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
    }
  },
  created() {
    setTimeout(() => {
      this.getEntryInfoDetails({
        id: this.entryInfoId
      })
    },100)

    setTimeout(() => {
      this.formApply['studentName'] = this.entryInfoDetails['studentName']
      this.formApply['gender'] = this.entryInfoDetails['gender']
      this.formApply['phone'] = this.entryInfoDetails['phone']
      this.formApply['nativePlace'] = this.entryInfoDetails['nativePlace']
      this.formApply['graduationSchool'] = this.entryInfoDetails['graduationSchool']
      this.formApply['idCard'] = this.entryInfoDetails['idCard']
      this.formApply['remark'] = this.entryInfoDetails['remark']
    }, 200)
  },
  computed: {
    ...mapGetters(['entryInfoDetails', 'entryInfoId'])
  },
  methods: {
    ...mapActions(['getEntryInfoDetails'])
  }
}
</script>
<style lang="scss" scoped>
header {
  text-align: center;
  margin: 20px;
  font-size: 20px;
  font-family: 'Microsoft Yahei UI'
}
</style>

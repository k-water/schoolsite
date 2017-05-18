<template>
  <div id="editjobinfo">
    <div class="content">
      <el-button type="primary" @click="jump()">返回</el-button>
      <h1>就业信息修改页面</h1>
      <el-form :label-position="labelPosition" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="jobInfoDetails.title"></el-input>
        </el-form-item>
      </el-form>

      <div>
        <div class="tips">
          <p>Tips / 点击图片可调整大小</p>
        </div>
        <div class="quill-editor-example">
        <!-- quill-editor -->
        <quill-editor ref="myTextEditor"
                      v-model="jobInfoDetails.content"
                      :options="editorOption">
          </quill-editor>
          <!--
          <div class="html ql-editor" v-html="content"></div>
          -->
        </div>
         <el-button class="editor-btn" type="primary" @click="changeJobInfo">修改</el-button>
         <el-button class="editor-btn" type="default" @click="reset">重置</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../../utils/http.js'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'EditJobInfo',
  data() {
    return {
      content: '',
      type: 2,
      labelPosition: 'right',
      editorOption: {
        modules: {
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          imageImport: true,
          imageResize: {
            displaySize: true
          }
        }
      }
    }
  },
  created() {
    this.getJobInfoDetails({
      id: this.$route.params.id
    })
  },
  computed: {
    ...mapGetters(['jobInfoId', 'jobInfoDetails'])
  },
  methods: {
    ...mapActions(['getJobInfoDetails']),
    changeJobInfo() {
      let params = {
        title: this.jobInfoDetails.title,
        content: this.jobInfoDetails.content,
        type: this.type
      }
      axios.put('/informations/' + this.$route.params.id, params).then((res) => {
        if(res.data.code === 0) {
          this.$message.success('修改成功')
        }else {
          this.$message.error('修改失败')
        }
      }).catch((err) => {
        return console.log(err)
      })
      this.jobInfoDetails.content = ''
      this.jobInfoDetails.title = ''
    },
    reset() {
      this.jobInfoDetails.content = ''
      this.jobInfoDetails.title = ''
    },
    jump() {
      this.$router.push({
        name: 'InfoJobManage'
      })
    }
  }
}
</script>

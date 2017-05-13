<template>
  <div id="editjobinfo">
    <div class="content">
      <h1>就业信息修改页面</h1>
      <el-form :label-position="labelPosition" label-width="80px" :model="form">
        <el-form-item label="文章标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
      </el-form>

      <div>
        <div class="tips">
          <p>Tips / 点击图片可调整大小</p>
        </div>
        <div class="quill-editor-example">
        <!-- quill-editor -->
        <quill-editor ref="myTextEditor"
                      v-model="content"
                      :options="editorOption">
          </quill-editor>
          <div class="html ql-editor" v-html="content"></div>
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
      form: {
        title: ''
      },
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
    setTimeout(() => {
      this.getJobInfoDetails({
        id: this.jobInfoId
      })
    }, 100)
    setTimeout(() => {
      this.form.title = this.jobInfoDetails.title
      this.content = this.jobInfoDetails.content
    },200)
  },
  computed: {
    ...mapGetters(['jobInfoId', 'jobInfoDetails'])
  },
  methods: {
    ...mapActions(['getJobInfoDetails']),
    changeJobInfo() {
      let params = {
        title: this.form.title,
        content: this.content,
        type: this.type
      }
      axios.put('/informations/' + this.jobInfoId, params).then((res) => {
        if(res.data.code === 0) {
          this.$message.success('修改成功')
        }else {
          this.$message.error('修改失败')
        }
      }).catch((err) => {
        return console.log(err)
      })
      this.content = ''
      this.form.title = ''
    },
    reset() {
      this.content = ''
      this.form.title = ''
    }
  }
}
</script>

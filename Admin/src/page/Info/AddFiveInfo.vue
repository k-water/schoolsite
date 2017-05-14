<template>
  <div id="addfiveinfo">
    <div class="content">
      <h1>五年制大专信息添加页面</h1>
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
          <!--
          <div class="html ql-editor" v-html="content"></div>
          -->
        </div>
         <el-button class="editor-btn" type="primary" @click="addInfoFive">提交</el-button>
         <el-button class="editor-btn" type="default" @click="reset">重置</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../../utils/http.js'
export default {
  name: 'AddFiveInfo',
  data() {
    return {
      content: '',
      type: 1,
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
  methods: {
    addInfoFive() {
      let params = {
        title: this.form.title,
        content: this.content,
        type: this.type
      }
      axios.post('/informations', params).then((res) => {
        if(res.data.code === 0) {
          this.$message.success('添加成功')
        }else {
          this.$message.error('添加失败')
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

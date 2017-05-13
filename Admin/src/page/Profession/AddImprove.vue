<template>
  <div id="improve">
    <div class="content">
      <h1>学历提升专业添加页面</h1>
      <el-form :label-position="labelPosition" label-width="80px" :model="form">
        <el-form-item label="文章标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
      </el-form>

      <!--图片上传-->
      <el-upload
        class="upload-demo"
        drag
        action="http://112.74.93.190:8080//upload"
        :on-success="handleSuccess"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">上传封面图片</div>
      </el-upload>


      <div>
        <div class="tips">
          <p>Tips / 点击图片可调整大小</p>
        </div>
        <div class="quill-editor-example">
        <!-- quill-editor -->
        <quill-editor ref="myTextEditor"
                      v-model="content"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)">
          </quill-editor>
          <div class="html ql-editor" v-html="content"></div>
        </div>
         <el-button class="editor-btn" type="primary" @click="customButtonClick">提交</el-button>
         <el-button class="editor-btn" type="default" @click="reset">重置</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import Quill from 'quill'
import axios from '../../utils/http.js'
import { ImageImport } from '../../modules/ImageImport.js'
import { ImageResize } from '../../modules/ImageResize.js'
Quill.register('modules/imageImport', ImageImport)
Quill.register('modules/imageResize', ImageResize)
export default {
  name: 'Home',
  data() {
    return {
      cover: '',
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
  computed: {
    editor() {
      return this.$refs.myTextEditor.quillEditor
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.content = '<h1>Example 1 changed!</h1>'
    // }, 1800)
  },
  methods: {
    onEditorBlur(editor) {
      //console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      //console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      //console.log('editor ready!', editor)
    },
    handleSuccess(response, file, fileList) {
      this.cover = response.data
    },
    customButtonClick() {
      let params = {
        title: this.form.title,
        cover: this.cover,
        content: this.content,
        type: this.type
      }
      axios.post('/subjects', params).then((res) => {
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
    }
  }
}
</script>
<style lang="scss" scoped>
.tips {
  background: #eef1f6;
  margin: 20px 0;
  width: 100%;
  height: 100%;

  p {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: black;
    padding: 0 0 0 20px;
  }
}
.editor-btn {
  margin-top: 20px;
}
</style>


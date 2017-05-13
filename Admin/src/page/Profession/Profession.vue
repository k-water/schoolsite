<template>
  <div id="profession">
    <div class="content">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
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
import { ImageImport } from '../../modules/ImageImport.js'
import { ImageResize } from '../../modules/ImageResize.js'
Quill.register('modules/imageImport', ImageImport)
Quill.register('modules/imageResize', ImageResize)
export default {
  name: 'Home',
  data() {
    return {
      content: '',
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
    console.log('this is my editor', this.editor)
    // setTimeout(() => {
    //   this.content = '<h1>Example 1 changed!</h1>'
    // }, 1800)
  },
  methods: {
    onEditorBlur(editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      console.log('editor ready!', editor)
    },
    customButtonClick() {
      // alert(`You can custom the button and listen click event to do something...\n你可以定义一些自定义按钮做你想做的事，如上传图片至第三方存储...等等`)
      console.log(this.content)
      this.$message.success('提交成功')
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


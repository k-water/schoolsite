<template>
  <div id="editimprove">
     <div class="content">
      <h1>学历提升修改页面</h1>
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
                      :options="editorOption">
          </quill-editor>
          <div class="html ql-editor" v-html="content"></div>
        </div>
         <el-button class="editor-btn" type="primary" @click="improveChange">修改</el-button>
         <el-button class="editor-btn" type="default" @click="reset">重置</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../../utils/http.js'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'EditImprove',
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
  created() {
    setTimeout(() => {
      this.getEditImproveDetails({
        id: this.editImproveId
      })
    },100)
  },
  mounted() {
    setTimeout(() => {
      this.form.title = this.editImproveDetails.title
      this.content = this.editImproveDetails.content
      this.cover = this.editImproveDetails.cover
    },100)
  },
  computed: {
    ...mapGetters(['editImproveId', 'editImproveDetails']),
    editor() {
      return this.$refs.myTextEditor.quillEditor
    }
  },
  methods: {
    ...mapActions(['getEditImproveDetails']),
    improveChange() {
      let params = {
        title: this.form.title,
        cover: this.cover,
        content: this.content,
        type: this.type
      }
      axios.put('/subjects/' + this.editImproveDetails.id, params).then((res) => {
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
    handleSuccess(response, file, fileList) {
      this.cover = response.data
    },
    reset() {
      this.content = ''
      this.form.title = ''
    }
  }
}
</script>
<style lang="scss">
</style>


<template>
  <div id="profession">
    <div class="content">
      <el-button type="primary" @click="$router.push({name: 'ProList'})">返回</el-button>
      <h1>一般专业添加页面</h1>
      <el-form :label-position="labelPosition" label-width="80px" :model="form">
        <el-form-item label="文章标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
      </el-form>

      <el-upload
        class="avatar-uploader"
        action="http://112.74.93.190:8080/upload"
        :show-file-list="false"
        :on-success="handleSuccess"
        >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <div>
        <div class="tips">
          <p>Tips / 点击上传封面图片</p>
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
         <el-button class="editor-btn" type="primary" @click="customButtonClick">提交</el-button>
         <el-button class="editor-btn" type="default" @click="reset">重置</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../../utils/http.js'

export default {
  name: 'Home',
  data() {
    return {
      cover: '',
      content: '',
      type: 1,
      form: {
        title: ''
      },
      imageUrl: '',
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
  },
  methods: {
    handleSuccess(response, file, fileList) {
      this.cover = response.data
      this.$message.success('封面图片上传成功')
      this.imageUrl = URL.createObjectURL(file.raw)
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
          setTimeout(() => {
            this.$router.push({
              name: 'ProList'
            })
          }, 1000)
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
<style lang="scss">
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

</style>


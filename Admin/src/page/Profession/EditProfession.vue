<template>
  <div id="editprofession">
     <div class="content">
      <h1>一般专业修改页面</h1>
      <el-form :label-position="labelPosition" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="editProDetails.title"></el-input>
        </el-form-item>
      </el-form>

      <!--图片上传-->
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
          <p>Tips / 点击图片可调整大小</p>
        </div>
        <div class="quill-editor-example">
        <!-- quill-editor -->
          <quill-editor ref="myTextEditor"
                      v-model="editProDetails.content"
                      :options="editorOption">
          </quill-editor>
          <!--
          <div class="html ql-editor" v-html="content"></div>
          -->
        </div>
         <el-button class="editor-btn" type="primary" @click="proChange">修改</el-button>
         <el-button class="editor-btn" type="default" @click="reset">重置</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../../utils/http.js'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'EditPro',
  data() {
    return {
      cover: '',
      content: '',
      type: 1,
      picList: [],
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
  created() {
    this.getEditProDetails({
      id: this.$route.params.id
    })
  },
  computed: {
    ...mapGetters(['editProId', 'editProDetails']),
    editor() {
      return this.$refs.myTextEditor.quillEditor
    }
  },
  methods: {
    ...mapActions(['getEditProDetails']),
    proChange() {
      let params = {
        title: this.editProDetails.title,
        cover: this.editProDetails.cover,
        content: this.editProDetails.content,
        type: this.type
      }
      axios.put('/subjects/' + this.$route.params.id, params).then((res) => {
        if(res.data.code === 0) {
          this.$message.success('修改成功')
        }else {
          this.$message.error('修改失败')
        }
      }).catch((err) => {
        return console.log(err)
      })
      this.editProDetails.content = ''
      this.editProDetails.title = ''
    },
    handleSuccess(response, file, fileList) {
      this.editProDetails.cover = response.data
      this.$message.success('封面图片上传成功')
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    reset() {
      this.editProDetails.content = ''
      this.editProDetails.title = ''
      this.editProDetails.cover = ''
    }
  }
}
</script>
<style lang="scss">
</style>


<template>
  <div id="editimprove">
     <div class="content">
     <el-button type="primary" @click="jump()">返回</el-button>
      <h1>学历提升修改页面</h1>
      <el-form :label-position="labelPosition" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="editImproveDetails.title"></el-input>
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
          <p>Tips / 点击可上传图片</p>
        </div>
        <div class="quill-editor-example">
        <!-- quill-editor -->
          <quill-editor ref="myTextEditor"
                      v-model="editImproveDetails.content"
                      :options="editorOption">
          </quill-editor>
          <!--
          <div class="html ql-editor" v-html="content"></div>
          -->
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
    this.getEditImproveDetails({
      id: this.$route.params.id
    })
    setTimeout(()=>{
      this.imageUrl = this.editImproveDetails.cover
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
        title: this.editImproveDetails.title,
        cover: this.editImproveDetails.cover,
        content: this.editImproveDetails.content,
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
      this.editImproveDetails.content = ''
      this.editImproveDetails.title = ''
    },
    handleSuccess(response, file, fileList) {
      this.editImproveDetails.cover = response.data
      this.$message.success('封面图片上传成功')
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    reset() {
      this.editImproveDetails.content = ''
      this.feditImproveDetails.title = ''
    },
    jump() {
      this.$router.push({
        name: 'ImproveList'
      })
    }
   }
}
</script>
<style lang="scss">
</style>


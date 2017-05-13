<template>
  <div id="editfiveinfo">
    <div class="content">
      <h1>五年制大专信息修改页面</h1>
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
         <el-button class="editor-btn" type="primary" @click="changeInfoFive">修改</el-button>
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
  name: 'EditFiveInfo',
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
  computed: {
    ...mapGetters(['editInfoFiveId', 'editInfoFiveDetails'])
  },
  created() {
    setTimeout(() => {
      this.getEditInfoFiveDetails({
        id: this.editInfoFiveId
      })
    }, 100)
    setTimeout(() => {
      this.form.title = this.editInfoFiveDetails.title
      this.content = this.editInfoFiveDetails.content
    },200)
  },
  methods: {
    ...mapActions(['getEditInfoFiveDetails']),
    changeInfoFive() {
      let params = {
        title: this.form.title,
        content: this.content,
        type: this.type
      }
      axios.put('/informations/' + this.editInfoFiveId, params).then((res) => {
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

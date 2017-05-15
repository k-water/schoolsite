<template>
  <div id="editfiveinfo">
    <div class="content">
      <h1>五年制大专信息修改页面</h1>
      <el-form :label-position="labelPosition" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="editInfoFiveDetails.title"></el-input>
        </el-form-item>
      </el-form>

      <div>
        <div class="tips">
          <p>Tips / 点击图片可调整大小</p>
        </div>
        <div class="quill-editor-example">
        <!-- quill-editor -->
        <quill-editor ref="myTextEditor"
                      v-model="editInfoFiveDetails.content"
                      :options="editorOption">
          </quill-editor>
          <!--
          <div class="html ql-editor" v-html="content"></div>
          -->
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
    this.getEditInfoFiveDetails({
      id: this.$route.params.id
    })
  },
  methods: {
    ...mapActions(['getEditInfoFiveDetails']),
    changeInfoFive() {
      let params = {
        title: this.editInfoFiveDetails.title,
        content: this.editInfoFiveDetails.content,
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
      this.editInfoFiveDetails.content = ''
      this.editInfoFiveDetails.title = ''
    },
    reset() {
      this.editInfoFiveDetails.content = ''
      this.editInfoFiveDetails.title = ''
    }
  }
}
</script>

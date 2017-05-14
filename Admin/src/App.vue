<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body {
  width: 100%;
  height: 100%;
}
body {
  font-size: 14px;
  font-family: Helvetica Neue,Helvetica,microsoft yahei,arial,STHeiTi,sans-serif;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.content {
  background: none repeat scroll 0 0 #fff;
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  width: auto;
  padding: 40px;
  box-sizing: border-box;
  overflow-y: scroll;
  h1 {
    margin: 20px auto;
    text-align: center;
  }
}

.ql-container .ql-editor {
  min-height: 25em !important;
  padding-bottom: 1em !important;
  max-height: 30em !important;
}
.html {
  min-height: 15em;
  max-height: 20em;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-top: none;
  resize: vertical;
}
.editor-btn {
  margin-top: 20px !important;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9 !important;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff !important;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 278px;
  height: 278px;
  line-height: 278px !important;
  text-align: center;
}
.avatar {
  width: 278px;
  height: 278px;
  display: block;
}
.el-input.is-disabled .el-input__inner {
  background-color: transparent !important;
  border-color: #d1dbe5 !important;
  color: #9E9E9E !important;
  cursor: not-allowed;
}
.el-textarea.is-disabled .el-textarea__inner {
  background-color: transparent !important;
  border-color: #d1dbe5 !important;
  color: #9E9E9E !important;
  cursor: not-allowed;
}
</style>

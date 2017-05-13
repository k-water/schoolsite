<template>
  <div id="app">
    <Headers></Headers>
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Headers from './components/Headers.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    Headers,
    Sidebar
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
  top: 92px;
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
</style>

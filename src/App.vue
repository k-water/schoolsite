<template>
  <div id="app">
    <Headers></Headers>
    <router-view></router-view>
    <Footers></Footers>
  </div>
</template>

<script>
import Headers from './components/Headers'
import Footers from './components/Footers'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    Headers,
    Footers
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
html,body {
  height: 100%;
  font-size: 14px;
  font-weight: normal;
  text-decoration: none;
  font-family: 微软雅黑;
  color: #222222;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
}
</style>

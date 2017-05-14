<template>
  <div id="app">
    <Headers></Headers>
    <router-view></router-view>
    <Footers></Footers>
    <Online></Online>
  </div>
</template>

<script>
import Headers from './components/Headers'
import Footers from './components/Footers'
import Online from './components/Online'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    Headers,
    Footers,
    Online
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
  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
  }
.common-h {
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
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

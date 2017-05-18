<template>
  <div id="Headers">
    <el-row class="container">
      <el-col :span="12" class="text-1">
        <p>湖南都市职业学院招生网</p>
      </el-col>
      <el-col :span="12" class="text-2">
        <p>博学笃行，与时俱进</p>
        <p>LEARNED RESOURCEFUL,TIMES</p>
      </el-col>
    </el-row>
    <el-row class="nav-row">
      <el-col :span="24" class="nav-container">
        <el-menu :default-active="activeIndex" class="nav-menu" mode="horizontal">
          <el-menu-item index="1">
            <router-link to="/">网站首页</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/profession">专业设置</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/college">五年制大专</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/education">学历提升</router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <router-link to="/cooperation">校企合作</router-link>
          </el-menu-item>
          <el-menu-item index="6">
            <router-link to="/apply">网上报名</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'Headers',
    data(){
      return {
        activeIndex: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    padding-top: 30px;
    width: 1000px;
    margin: 0 auto 20px auto;
    .text-1 {
      font-size: 32px;
      color: rgb(255, 68, 0);
      font-family: tahoma;
      font-weight: bold;
    }
    .text-2 p {
      text-align: right;
      font-family: 微软雅黑;
      font-size: 16px; 
      color: #000;
    }
  }
  .nav-row {
    width: 1100px;
    height: auto;
    margin: 0 auto;
  }
  .nav-container {
    margin: 0;
    padding: 0;
    .nav-menu {
      background: white;
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        font-size: 18px;
        a {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  // ele样式覆盖
  .el-menu--horizontal .el-menu-item {
    border-bottom: 3px solid transparent;
  }
  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active {
    color: #f13a3a;
  }
  .el-menu--horizontal>.el-menu-item:hover {
    color: #f13a3a;
    border-bottom: 3px solid #f13a3a;
  }
</style>
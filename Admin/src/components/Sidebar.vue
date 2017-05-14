<template>
  <div id="sidebar">
    <el-menu :default-active=activeIndex :router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
      <el-submenu index="/">
        <template slot="title"><i class="el-icon-message"></i>专业管理</template>
        <el-menu-item-group>
          <el-menu-item index="/">一般专业</el-menu-item>
          <el-menu-item index="/improvelist">学历提升</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>信息管理</template>
        <el-menu-item-group>
          <el-menu-item index="/infoFiveManage">五年制大专信息</el-menu-item>
          <el-menu-item index="/infoJobManage">就业信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/entryManage">
        <i class="el-icon-message"></i>报名管理
      </el-menu-item>
      <el-menu-item index="/messageManage">
        <i class="el-icon-message"></i>留言管理
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      activeIndex: '/'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      
    },
    handleClose(key, keyPath) {
      
    }
  }
}
</script>
<style lang="scss">
#sidebar {
  display: block;
  position: absolute;
  width: 250px;
  left: 0;
  top: 70px;
  bottom: 0;
  background: #2e363f;
}
.el-menu {
  height: 100%;
}
</style>


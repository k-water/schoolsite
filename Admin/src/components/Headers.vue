<template>
  <div id="headers">
    <el-row>
      <el-col :span="10" class="header">
        <div class="grid-content bg-purple-dark">
          <h1>后台管理系统</h1>
        </div>
      </el-col>
      <el-col :span="10" :push="4">
        <div class="grid-content bg-purple-dark">
          
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Headers',
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.header {
  padding: 18px;
  color: whitesmoke;
  font-family: 'microsoft yahei ui';
  .grid-content {
    border-radius: 4px;
    h1 {
      font-size: 2em;
      line-height: 2em;
    }
  }
}
.el-row {
  margin-bottom: 20px;
  background-color: #242f42;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background-color: #242f42;
}
</style>


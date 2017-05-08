<template>
  <div id="Home">
    <el-row style="margin-top:10px">
      <el-carousel :interval="3000" trigger="click" height="400px">
        <el-carousel-item v-for="item in itemsImg" :key="item">
          <img :src=item alt="">
        </el-carousel-item>
      </el-carousel>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data(){
      return {
        itemsImg: [
          'http://oc1gyfe6q.qnssl.com/17-3-4/44674791-file_1488631602142_4ec5.jpg',
          'https://oc1gyfe6q.qnssl.com/v2-ec691416744673738828d1f5b343d58d_b.jpg?raw=true',
          'https://oc1gyfe6q.qnssl.com/0349c49cba94c9aea3f4a47a7e26735f.jpg?raw=true',
          'https://oc1gyfe6q.qnssl.com/p5kET4.jpg?raw=true'
        ]
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
  img {
    width: 100%;
    height: 100%;
    min-width: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(1) {
    background-size: 100% 100%;
    background: url('http://oc1gyfe6q.qnssl.com/17-3-4/44674791-file_1488631602142_4ec5.jpg') no-repeat
  }
</style>
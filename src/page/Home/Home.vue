<template>
  <div id="Home">
    <el-row style="margin-top:10px">
      <el-carousel :interval="3000" trigger="click" height="400px" :autoplay="false">
        <el-carousel-item v-for="item in itemsImg" :key="item">
          <img :src=item alt="">
        </el-carousel-item>
      </el-carousel>
    </el-row>

    <el-row class="list-five"  type="flex" justify="space-around">
      <el-col :span="10">
        <ul class="list-ul">
          <li class="li-first">
            <span>五年制简介</span>
          </li>
          <li v-for="item in lists" :key="item">
            <a href="javascript:;"> {{item.title}} </a>
            <span> {{item.time}} </span>
          </li>
        </ul>
      </el-col>
      <el-col :span="10">
        <ul class="list-ul">
          <li class="li-first">
            <span>五年制简介</span>
          </li>
          <li v-for="item in lists" :key="item">
            <a href="javascript:;"> {{item.title}} </a>
            <span> {{item.time}} </span>
          </li>
        </ul>
      </el-col>
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
        ],
        lists: [
          {
            title: '计算机软件技术就业前景',
            time: '2017-05-09'
          },
          {
            title: '计算机软件技术就业前景',
            time: '2017-05-09'
          },
          {
            title: '计算机软件技术就业前景',
            time: '2017-05-09'
          }
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
  .list-five {
    margin: 30px auto auto auto;
    display: flex;
    justify-content: space-between;
    width: 1000px;
    .list-ul {
      width:100%;
      height: auto;
      display: flex;
      flex-direction: column;
      li {
        display: block;
        height: 45px;
        line-height: 45px;
        padding: 5px;
      }
      .li-first {
        border-bottom: 1px solid #ddd;
        span {
          color: #1e50ae;
          font: 20px/150% 'Microsoft YaHei';
          position: relative;
          padding-left: 10px;
          &:before {
            content: "|";
            position: absolute;
            font-weight: 800;
            top: -2px;
            left: -5px;
          }
        }
      }
      li:not(.li-first) {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dashed #ddd;
        span {
          display: block;
          color: #666;
          height: 36px;
          line-height: 36px;
        }
        a {
          display: block;
          color: #666;
          height: 36px;
          line-height: 36px;
          &:hover {
            color: #e01f19 !important;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
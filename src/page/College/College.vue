<template>
  <div id="college">
    <el-row class="header-img">
      <el-col :span="24">
        <a href="javascript:;">
          <img src="https://oc1gyfe6q.qnssl.com/17-5-9/77656568-file_1494295931179_7525.jpg" alt="">
        </a>
      </el-col>
    </el-row>

    <el-row class="common-h">
      <el-col :span="6" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://oc1gyfe6q.qnssl.com/p5kET4.jpg?raw=true" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="17" :offset="1">
        <ul class="list-ul">
          <li class="li-first">
            <span>文章列表</span>
          </li>
          <li v-for="item in info" :key="item">
           <router-link :to="'/college/article/' + item.path">{{item.title}}</router-link>
            <span> {{item.time}} </span>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'College',
    data() {
      return {
        currentDate: new Date(),
        info: [
          {
            title: '国际名校赛艇挑战赛我校首次亮...国际名校赛艇挑战赛我校首次亮...国际名校赛艇挑战赛我校首次亮',
            time: '2017-03-29',
            path: 'ssss'
          },
          {
            title: '国际名校赛艇挑战赛我校首次亮...',
            time: '2017-03-29',
            path: 'ssss'
          },
          {
            title: '国际名校赛艇挑战赛我校首次亮...',
            time: '2017-03-29',
            path: 'ssss'
          },
          {
            title: '国际名校赛艇挑战赛我校首次亮...',
            time: '2017-03-29',
            path: 'ssss'
          },
          {
            title: '国际名校赛艇挑战赛我校首次亮...',
            time: '2017-03-29',
            path: 'ssss'
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
    max-width: 100%;
  }
  .header-img {
    width: 980px;
    margin: 10px auto;
    a {
      display: block;
    }
  }
  .list-ul {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    li {
      display: block;
      height: 65px;
      line-height: 65px;
      padding: 5px;
    }
    .li-first {
      border-bottom: 1px solid #ddd;
      span {
        color: #C40000;
        font: 24px/150% 'Microsoft YaHei';
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
        height: 60px;
        line-height: 60px;
        width: 20%;
        text-align: right;
      }
      a {
        width: 70%;
        display: block;
        color: #666;
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        &:hover {
          color: #e01f19 !important;
          cursor: pointer;
        }
      }
    }
  }
  time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }
</style>

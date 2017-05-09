<template>
  <div id="profession">
    <el-row class="header-img">
      <el-col :span="24">
        <a href="javascript:;">
          <img src="https://oc1gyfe6q.qnssl.com/17-5-9/77656568-file_1494295931179_7525.jpg" alt="">
        </a>
      </el-col>
    </el-row>

    <div class="wrap">
      <el-col :span="7" v-for="item in specialList" :key="item" class="list-col">
        <section>
          <figure>
            <a href="javascript:;">
              <img :src=item.img alt="">
            </a>
            <figcaption> {{item.title}} </figcaption>
          </figure>
          <article>
            <p> {{item.introduction}} </p>
          </article>
          <div class="btn-more">
            <a href="javascript:;">了解更多</a>
          </div>
        </section>
      </el-col>
    </div>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="6"
        layout="prev, pager, next, jumper"
        :total="60">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Profession',
    data() {
      return {
        currentPage1: 1,
        currentPage2: 2,
        currentPage3: 3,
        currentPage4: 4,
        specialList: [
          {
            img: 'https://oc1gyfe6q.qnssl.com/p5kET4.jpg?raw=true',
            title: '中小学生英语培训课程',
            introduction: '我们在线为学生提供实时互动的网络课程，根据学生的需求，兴趣爱好、级别、学习习惯与频率进行个性化课程匹配，全校外教师资....'
          },
          {
            img: 'https://oc1gyfe6q.qnssl.com/p5kET4.jpg?raw=true',
            title: '中小学生英语培训课程',
            introduction: '我们在线为学生提供实时互动的网络课程，根据学生的需求，兴趣爱好、级别、学习习惯与频率进行个性化课程匹配，全校外教师资....'
          },
          {
            img: 'https://oc1gyfe6q.qnssl.com/p5kET4.jpg?raw=true',
            title: '中小学生英语培训课程',
            introduction: '我们在线为学生提供实时互动的网络课程，根据学生的需求，兴趣爱好、级别、学习习惯与频率进行个性化课程匹配，全校外教师资....'
          },
          {
            img: 'https://oc1gyfe6q.qnssl.com/p5kET4.jpg?raw=true',
            title: '中小学生英语培训课程',
            introduction: '我们在线为学生提供实时互动的网络课程，根据学生的需求，兴趣爱好、级别、学习习惯与频率进行个性化课程匹配，全校外教师资....'
          },
          {
            img: 'https://oc1gyfe6q.qnssl.com/p5kET4.jpg?raw=true',
            title: '中小学生英语培训课程',
            introduction: '我们在线为学生提供实时互动的网络课程，根据学生的需求，兴趣爱好、级别、学习习惯与频率进行个性化课程匹配，全校外教师资....'
          },
          {
            img: 'https://oc1gyfe6q.qnssl.com/p5kET4.jpg?raw=true',
            title: '中小学生英语培训课程',
            introduction: '我们在线为学生提供实时互动的网络课程，根据学生的需求，兴趣爱好、级别、学习习惯与频率进行个性化课程匹配，全校外教师资....'
          }
        ]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
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
  .wrap {
    width: 1000px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .list-col {
      margin-bottom: 20px;
    }
    figure {
      figcaption {
        padding: 8px 0 0 5px;
        font-family: "Microsoft YaHei";
        font-size: 14px;
        line-height: 32px;
        color: rgb(225, 3, 18);
      }
    }
    article {
      p {
        font-family: "Microsoft YaHei";
        font-size: 14px;
        color: rgb(166, 165, 165);
        line-height: 25px;
        padding: 0 0 0 5px;
      }
    }
    .btn-more {
      padding: 8px 0 0 5px;
      a {
        font-family: "Microsoft YaHei";
        border: 1px solid #a9a9a9;
        background: transparent;
        height: 34px;
        line-height: 34px;
        color: #a9a9a9;
        border-radius: 5px;
        padding: 8px 25px 8px 25px;
      }
    }
  }
  .block {
    width: 1000px;
    margin: 0 auto;
  }
</style>

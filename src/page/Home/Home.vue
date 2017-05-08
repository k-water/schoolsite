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
          <li class="li-first-more">
            <span>更多</span>
          </li>
          <li v-for="item in lists" :key="item">
            <a href="javascript:;"> {{item.title}} </a>
            <span> {{item.time}} </span>
          </li>
        </ul>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around" class="list-special">
       <el-col :span="7" v-for="item in specialList" :key="item">
         <section>
            <figure>
              <img :src=item.img alt="">
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
    </el-row>
  </div>
</template>
<script>
  import '../../assets/style/home.scss'
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
        ],
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
          }
        ]
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
  
</style>
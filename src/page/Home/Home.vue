<template>
  <div id="Home">
    <el-row style="margin-top:10px">
      <el-carousel :interval="3000" trigger="click" height="400px" :autoplay="true">
        <el-carousel-item v-for="item in itemsImg" :key="item">
          <a href="javascript:;">
            <img :src=item alt="">
          </a>
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

    <el-row type="flex" justify="space-around" class="info">
      <el-col :span="8">
        <ul class="list-ul">
          <li class="li-first">
            <span>就业信息</span>
          </li>
          <li v-for="item in info" :key="item">
            <a href="javascript:;"> {{item.title}} </a>
            <span> {{item.time}} </span>
          </li>
        </ul>
      </el-col>
      <el-col :span="14">
        <ul class="list-ul">
          <li class="li-first">
            <span>校园环境</span>
          </li>
        </ul>
        <ul class="list-img">
          <li v-for="item in school" :key="item">
            <a href="javascript:;">
              <img :src=item.pic alt="">
            </a>
          </li>
        </ul>
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
        ],
        info: [
          {
            title: '国际名校赛艇挑战赛我校首次亮...',
            time: '2017-03-29'
          },
          {
            title: '国际名校赛艇挑战赛我校首次亮...',
            time: '2017-03-29'
          },
          {
            title: '国际名校赛艇挑战赛我校首次亮...',
            time: '2017-03-29'
          },
          {
            title: '国际名校赛艇挑战赛我校首次亮...',
            time: '2017-03-29'
          },
          {
            title: '国际名校赛艇挑战赛我校首次亮...',
            time: '2017-03-29'
          }
        ],
        school: [
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-8/18474302-file_1494256718241_fec0.jpg'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-8/58463072-file_1494256740231_f999.jpg'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-8/19095252-file_1494256753800_103a3.jpg'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-8/52623529-file_1494256762435_1e65.jpg'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-8/61074003-file_1494256794249_8417.jpg'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-8/59500119-file_1494256805021_13783.jpg'}
          // {pic: 'https://oc1gyfe6q.qnssl.com/17-5-8/94131071-file_1494256814327_86db.jpg'},
          // {pic: 'https://oc1gyfe6q.qnssl.com/17-5-8/11261531-file_1494256822249_176dc.jpg'},
          // {pic: 'https://oc1gyfe6q.qnssl.com/17-5-8/49990355-file_1494256829728_117b0.jpg'},
        ]
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
  
</style>
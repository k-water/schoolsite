<template>
  <div id="Home">
    <el-row style="margin-top:10px" class="common-h">
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
          <li v-for="item in info.content" :key="item" @click="getArtId(item.id)">
            <router-link :to="'/college/article/' + item.id"> {{item.title}} </router-link>
            <span> {{item.postedTime}} </span>
          </li>
        </ul>
      </el-col>
      <el-col :span="10">
        <ul class="list-ul">
          <li class="li-first-more" @click="jump()">
            <span>更多</span>
          </li>
          <li v-for="item in moreInfo.content" :key="item" @click="getArtId(item.id)">
            <router-link :to="'/college/article/' + item.id"> {{item.title}} </router-link>
            <span> {{item.postedTime}} </span>
          </li>
        </ul>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around" class="list-special">
       <el-col :span="7" v-for="item in specialList.content" :key="item">
         <section>
            <figure>
              <img :src=item.cover alt="">
              <figcaption> {{item.title}} </figcaption>
            </figure>
            <article>
              <p> {{removeHTMLTag(item.content)}} </p>
            </article>
            <div class="btn-more" @click="getDetailsID(item.id)">
              <router-link :to="'/profession/details/'+item.id">了解更多</router-link>
            </div>
         </section>
       </el-col>
    </el-row>
    <el-row class="common-h">
      <footer class="more-pro">
        <router-link to="/profession">
          <span>查看更多专业</span>
        </router-link>
      </footer>
    </el-row>
    <el-row type="flex" justify="space-around" class="info">
      <el-col :span="8">
        <ul class="list-ul">
          <li class="li-first">
            <span>就业信息</span>
          </li>
          <li v-for="item in jobInfo.content" :key="item" @click="getJobId(item.id)">
            <router-link :to="'/college/jobInfo/' + item.id"> {{item.title}} </router-link>
            <span> {{item.postedTime}} </span>
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
  import {mapActions,mapGetters} from 'vuex'
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
        school: [
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-8/18474302-file_1494256718241_fec0.jpg'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-8/58463072-file_1494256740231_f999.jpg'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-8/19095252-file_1494256753800_103a3.jpg'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-8/52623529-file_1494256762435_1e65.jpg'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-8/61074003-file_1494256794249_8417.jpg'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-8/59500119-file_1494256805021_13783.jpg'}
        ]
      }
    },
    created() {
      // 专业列表
      this.getProfessionList({
        page: 0,
        size: 3,
        type: 1
      })
      // 五年制大专左
      this.getInfoFive({
        page: 0,
        size: 3,
        type: 1
      })
      // 五年制大专右
      this.getMoreInfo({
        page: 1,
        size: 3,
        type: 1
      }),
      // 就业信息
      this.getJobInfo({
        page: 0,
        size: 5,
        type: 2
      })
    },
    computed: {
      ...mapGetters(['specialList','pageId', 'info', 'moreInfo', 'artId', 'jobInfo'])
    },
    methods: {
      ...mapActions(['getProfessionList','getDetailsID', 'getInfoFive', 'getMoreInfo', 'getArtId', 'getJobInfo', 'getJobId']),
      removeHTMLTag(str) {
        str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
        str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
        str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
        str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
        str=str.replace(/\s/g,''); //将空格去掉
        return str;
      },
      jump() {
        this.$router.push({
          name: 'College'
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  
</style>
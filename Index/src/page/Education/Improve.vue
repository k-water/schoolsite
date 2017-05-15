<template>
  <div id="improve">
    <el-row class="common-h sidebar">
      <el-col :span="7">
        <ul class="list-ul">
          <li class="li-first">
            <span>所有专业</span>
          </li>
          <li v-for="item in improveList.content" :key="item">
            <a href="javascript:;" @click="showDetails(item.id)"> {{item.title}} </a>
          </li>
        </ul>
      </el-col>
      <el-col :span="14" :push="2" class="all-details">
        <h1 class="title">{{ improveDetails.title }}</h1>
        <img :src=improveDetails.cover alt="">
        <div v-html="improveDetails.content" class="info">
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'Improve',
  data() {
    return {

    }
  },
  created() {
    this.getImproveList({
      page: 0,
      size: 99999,
      type: 2
    })
    this.getImproveDetails({
      id: this.$route.params.id
    })
  },
  computed: {
    ...mapGetters(['improveList', 'improveDetails', 'improveId'])
    
  },
  methods: {
    ...mapActions(['getImproveList', 'getImproveDetails']),
    removeHTMLTag(str) {
      str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
      str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
      str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
      str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
      str=str.replace(/\s/g,''); //将空格去掉
      return str;
    },
    showDetails(id) {
      this.getImproveDetails({
        id: id
      })
    }
  }
}
</script>


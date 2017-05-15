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
      <el-col :span="7" v-for="item in specialList.content" :key="item" class="list-col">
        <section>
          <figure>
            <a href="javascript:;">
              <img :src=item.cover alt="" style="width: 291px; height: 229px">
            </a>
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
    </div>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="specialList.size"
        layout="total, prev, pager, next, jumper"
        :total="specialList.totalElements">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'Profession',
    data() {
      return {
        currentPage1: 1,
        size: 6,
        type: 1
      }
    },
    computed: {
      ...mapGetters(['specialList','pageId'])
    },
    created() {
      this.getProfessionList({
        page: 0,
        size: 6,
        type: 1
      })
    },
    methods: {
      ...mapActions(['getProfessionList','getDetailsID']),
      removeHTMLTag(str) {
        str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
        str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
        str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
        str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
        str=str.replace(/\s/g,''); //将空格去掉
        return str;
      },
      handleSizeChange(val) {
        this.size = val
      },
      handleCurrentChange(val) {
        this.getProfessionList({
          page: val - 1,
          size: this.size,
          type: this.type
        })
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
          padding: 0 0 0 5px;
          position: relative;
          line-height: 1.8em;
          /* 3 times the line-height to show 3 lines */
          height: 5.4em;
          overflow: hidden;
      }
      p::after {
          content:"..";
          font-weight:bold;
          position:absolute;
          bottom:0;
          right:-1px;
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

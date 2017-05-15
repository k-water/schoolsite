<template>
  <div id="job">
    <el-row class="common-h sidebar-art">
      <el-col :span="8">
        <ul class="list-ul">
          <li class="li-first">
            <span>就业信息</span>
          </li>
          <li v-for="item in jobInfo.content" :key="item">
            <a href="javascript:;" @click="showJobDetails(item.id)"> {{item.title}} </a>
          </li>
        </ul>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="jobInfo.size"
            layout="total,prev, pager, next, jumper"
            :total="jobInfo.totalElements">
          </el-pagination>
        </div>
      </el-col>

      <el-col :span="15" :push="1" class="art-details">
         <header>
          <h2>{{jobDetails.title}}</h2>
          <span>文章发布于: <em>{{jobDetails.postedTime}}</em></span>
          <span>浏览次数: <em>{{jobDetails.pageView}}</em></span>
        </header>
        <div v-html="jobDetails.content" class="content"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'JobInfos',
  data() {
    return {
      currentPage1: 1,
      size: 20,
      type: 2,
    }
  },
  async created() {
    await this.getJobInfo({
      page: 0,
      size: 999999,
      type: 2
    })

    this.getJobInfoDetails({
      id: this.$route.params.id
    })
  },

  computed: {
    ...mapGetters(['jobInfo', 'jobDetails', 'jobId'])
  },
  methods: {
    ...mapActions(['getJobInfo', 'getJobInfoDetails']),
    handleSizeChange(val) {
    },
    handleCurrentChange(val) {
      this.getInfoFive({
        page: val-1,
        size: this.size,
        type: this.type
      })
    },
    showJobDetails(id) {
      this.getJobInfoDetails({
        id: id
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.sidebar-art {
  .list-ul {
    width: 100%;
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
      a {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
  .block {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  .art-details {
    padding: 50px 10px 10px 10px;
    header {
      text-align: center;
    }
    .content {
      width: 100%;
      padding-top: 30px;
      line-height: 200%;
      font-size: 16px;
    }
  }
}
</style>


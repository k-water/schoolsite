<template>
  <div id="pDetails">
    <el-row class="common-h sidebar">
      <el-col :span="7">
        <ul class="list-ul">
          <li class="li-first">
            <span>所有专业</span>
          </li>
          <li v-for="item in specialList.content" :key="item">
            <a href="javascript:;" @click="showDetails(item.id)"> {{item.title}} </a>
          </li>
        </ul>
      </el-col>
      <el-col :span="14" :push="2" class="all-details">
        <h1 class="title">{{ professionDetails.title }}</h1>
        <img :src=professionDetails.cover alt="">
        <div v-html="professionDetails.content" class="info">
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'Details',
  data() {
    return {
    }
  },
  async mounted(){
    await this.getProfessionDetails()
      this.getDetails({
      id: this.$route.params.id
    })
  },
  computed: {
    ...mapGetters(['specialList','professionDetails','pageId'])
  },
  methods: {
    ...mapActions(['getProfessionDetails','getDetails']),
    showDetails(id) {
      this.getDetails({
        id: id
      })
    }
  }
}
</script>
<style lang="scss">
.sidebar {
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

    .all-details {
      padding: 30px;
      .title { 
        text-align: center;
      }
      img {
        margin: 20px auto;
      }
      .info {
        width: 100%;
        h1,h2,h3,h4,h5,h6 {
          margin: 20px 0 10px 0;
        }
        p {
          line-height: 180%;
        }
      }
    }
}
</style>

<template>
  <div id="cooperation">
   <el-row class="header-img">
      <el-col :span="24">
        <a href="javascript:;">
          <img src="https://oc1gyfe6q.qnssl.com/17-5-9/40300050-file_1494313005447_b766.jpg" alt="">
        </a>
      </el-col>
    </el-row>

    <div class="school-info common-h">
      <ul class="list-ul">
        <li class="li-first">
          <span>校园风光/VIEW</span>
        </li>
      </ul>
    </div>
    <div class="common-h school-info">
      <el-col :span="5" :key="item" v-for="(item,index) in sPic" v-bind:class="[(index+1)%4===0 ? 'img-margin' :'']">
        <a href="javascript:;">
          <img :src=item.pic alt="">
        </a>
      </el-col>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Cooperation',
    data() {
      return {
        sPic: [
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-9/39943912-file_1494314079177_10b77.png'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-9/39943912-file_1494314079177_10b77.png'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-9/39943912-file_1494314079177_10b77.png'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-9/39943912-file_1494314079177_10b77.png'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-9/39943912-file_1494314079177_10b77.png'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-9/39943912-file_1494314079177_10b77.png'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-9/39943912-file_1494314079177_10b77.png'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-9/39943912-file_1494314079177_10b77.png'}
        ]
      }
    },
    methods: {
      
    }
  }
</script>
<style lang="scss" scoped>
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
      height: 45px;
      line-height: 45px;
      padding: 5px;
    }
    .li-first {
      border-bottom: 1px solid #ddd;
      span {
        color: #02B9CE;
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
  }
  .school-info {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .el-col {
      margin: 0 20px 20px 0px;
    }
  }
  .img-margin {
    margin: 0 0px 20px 0px !important;
  }
</style>

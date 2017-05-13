<template>
  <div id="fiveinfo">
    <div class="content">
      <div class="add">
        <el-button type="primary" icon="edit" size="large" @click="jump()">添加五年制大专信息</el-button>
      </div>

       <el-table
        :data="infoFive.content"
        border
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
        >
        
        <el-table-column
          prop="title"
          label="五年制信息标题"
          sortable>
        </el-table-column>

        <el-table-column
          prop="postedTime"
          label="日期"
          sortable
          >
        </el-table-column>

        <el-table-column label="操作" width="280">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="infoFive.size"
          layout="total, prev, pager, next, jumper"
          :total="infoFive.totalElements">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../../utils/http.js'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'FiveInfo',
  data() {
    return {
      currentPage: 1,
      type: 1,
      size: 10
    }
  },
  created() {
    this.getInfoFiveList({
      page: 0,
      size: this.size,
      type: this.type
    })
  },
  computed: {
    ...mapGetters(['infoFive'])
  },
  methods: {
    ...mapActions(['getInfoFiveList', 'getEditInfoFiveId']),
    jump() {
      this.$router.push({
        path: '/addInfoFive/1'
      })
    },
    handleEdit(index, row) {
      this.getEditInfoFiveId(row.id)
      this.$router.push({
        path: '/editInfoFive/' + row.id
      })
    },
    handleDelete(index, row) {
      axios({
        method: 'delete',
        url: '/informations/' + row.id
      }).then(res => {
        if(res.data.code === 0) {
          this.$message.success('删除成功')
        }else {
          this.$message.error('删除失败')
        }
      }).catch(err => {
        return console.log(err)
      })
      this.infoFive.content.splice(index, 1)
    },
    handleCurrentChange(val) {
      this.getInfoFiveList({
        page: val - 1,
        size: this.size,
        type: this.type
      })
    }
  }
}
</script>


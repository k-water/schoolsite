<template>
  <div id="pro-list">
    <div class="content">
      <div class="add">
        <el-button type="primary" icon="edit" size="large" @click="jump()">添加专业</el-button>
      </div>
      <el-table
        :data="professionList.content"
        border
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
        >
        
        <el-table-column
          prop="title"
          label="专业标题"
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
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="professionList.size"
          layout="total, prev, pager, next, jumper"
          :total="professionList.totalElements">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../../utils/http.js'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'ProList',
  data() {
    return {
      currentPage: 1
    }
  },
  created() {
    this.getProfessionList({
      page: 0,
      size: 10,
      type: 1
    })
  },
  computed: {
    ...mapGetters(['professionList'])
  },
  methods: {
    ...mapActions(['getProfessionList', 'getEditProId']),
    jump() {
      this.$router.push({
        name: 'AddProfession'
      })
    },
    handleEdit(index, row) {
      this.getEditProId(row.id)
      this.$router.push({
        path: '/editprofession/' + row.id
      })
    },
    handleDelete(index, row) {
    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
         axios({
          method: 'delete',
          url: '/subjects/' + row.id
        }).then(res => {
          if(res.data.code === 0) {
            this.$message.success('删除成功')
          }else {
            this.$message.error('删除失败')
          }
        }).catch(err => {
          return console.log(err)
        })
        this.professionList.content.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },

    handleSizeChange(val) {
      
    },
    handleCurrentChange(val) {
      this.getProfessionList({
        page: val-1,
        size: 10,
        type: 1
      })
    }
  }
}
</script>
<style lang="scss">
.block {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.add {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
</style>

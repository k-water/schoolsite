<template>
  <div id="message">
    <div class="content">
      <el-table
        :data="message.content"
        border
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
        >
        
        <el-table-column
          prop="name"
          label="姓名"
          sortable>
        </el-table-column>

        <el-table-column
          prop="phone"
          label="手机号码"
          sortable>
        </el-table-column>
        
        <el-table-column label="时间" prop="createdTime">
        </el-table-column>

        <el-table-column label="备注" prop="remark">
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="message.size"
          layout="total, prev, pager, next, jumper"
          :total="message.totalElements">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'Message',
  data() {
    return {
      size: 10
    }
  },
  created() {
    this.getMessage({
      page: 0,
      size: this.size
    })
  },
  computed: {
    ...mapGetters(['message'])
  },
  methods: {
    ...mapActions(['getMessage']),
    handleCurrentChange(val) {
      this.getMessage({
        page: val - 1,
        size: this.size
      })
    }
  }
}
</script>


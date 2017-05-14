<template>
  <div id="entry">
    <div class="content">
      <el-table
        :data="entryInfo.content"
        border
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
        >
        
        <el-table-column
          prop="studentName"
          label="姓名"
          sortable>
        </el-table-column>

        <el-table-column
          prop="gender"
          label="性别"
          sortable>
        </el-table-column>

        <el-table-column
          prop="haveRead"
          label="是否已阅"
          sortable>
          <template scope="scope">
            <el-tag
              v-text="scope.row.haveRead === 'true' ? '已读' : '未读'"
              :type="scope.row.haveRead === 'true' ? 'success' : 'gray'"
             ></el-tag>
          </template>
        </el-table-column>
        
      </el-table>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="entryInfo.size"
          layout="total, prev, pager, next, jumper"
          :total="entryInfo.totalElements">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Entry',
  data() {
    return {
      currentPage: 1,
    }
  },
  created() {
    this.getEntryInfoList({
      page: 0,
      size: 10
    })
  },
  computed: {
    ...mapGetters(['entryInfo'])
  },
  methods: {
    ...mapActions(['getEntryInfoList']),
    handleCurrentChange() {

    }
  }
}
</script>

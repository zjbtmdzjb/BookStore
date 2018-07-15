<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    class="orderlist__table">
    <el-table-column
      type="index">
    </el-table-column>
    <el-table-column
      property="date"
      label="日期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="下单人"
      width="180">
      <template slot-scope="scope">

      </template>
    </el-table-column>
    <el-table-column
      prop="presentation"
      label="下单内容"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="presentation"
      label="下单金额"
      show-overflow-tooltip
      width="180">
    </el-table-column>
    <el-table-column 
    label="操作"
    width="150">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        adminName:'',
        onlineIP:'',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    components: {
     
    },
    created(){
      
    },
    mounted(){
        var self = this;
        axios.get('http://ip-api.com/json/')
        .then(function(res){
        if(res.status == 200){
            self.onlineIP = res.data.query;
        }
        })
    }
  }
</script>

<style lang="scss" scoped>
.orderlist__table{
  text-align: left;
}
</style>
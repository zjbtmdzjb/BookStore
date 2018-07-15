<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    class="userlist__table">
    <el-table-column
      type="index">
    </el-table-column>
    <el-table-column
      prop="username"
      label="用户名"
      width="200">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱">
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
        tableData: []
      }
    },
    components: {
     
    },
    created(){
      var userArray = new Array();
        var newNode = new Array({
          id:'',
          type:'',
          question:'',
          option:[],
          answer:'',
          analysis:'',
          image:''
        });
        let self = this;
        axios.get(API_HOST+"user/userlist")
        .then((res) => {
          if(res.data){
            for(var i=0; i<res.data.length;i++){
              newNode = res.data[i]
              userArray.push(newNode);
            }
            self.tableData = userArray;
          }
        })
        .catch((err) => {
          this.$message.error(err)
        })
    },
    methods:{
      handleEdit(index, row) {
        console.log(row.id)
      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios.post(API_HOST+"user/deleteUser.action",{
            id:row.id
          })
          .then((res) => {
            if(res.data){
              this.$message.success('删除用户'+row.username+'成功')
              location.reload()
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
    mounted(){
    }
  }
</script>

<style lang="scss" scoped>
.userlist__table{
  text-align: left;
}
</style>
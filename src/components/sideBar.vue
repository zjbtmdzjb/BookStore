<template>
  <el-aside width="230px">
    <el-menu
      default-active="index"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#eef1f6"
      text-color="#48576a"
      :router="true"
      active-text-color="#20a0ff">
      <el-menu-item index="/admin/index">
        <i class="fa fa-tachometer fa-lg"></i>
        <span slot="title">系统首页</span>
      </el-menu-item>
      <el-submenu index="/admin/questionManage">
        <template slot="title">
          <i class="fa fa-folder-o fa-lg"></i>
          <span slot="title">书库管理</span>
        </template>
        <el-menu-item index="/admin/bookList">
          <span slot="title">书籍列表</span>
        </el-menu-item>
        <el-menu-item index="/admin/orderList">
          <span slot="title">订单列表</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/admin/userManager">
        <template slot="title">
          <i class="fa fa-user-o fa-lg"></i>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item index="/admin/userList">用户列表</el-menu-item>
      </el-submenu>
      <el-submenu index="/admin/adminManage">
        <template slot="title">
          <i class="fa fa-id-card-o fa-lg"></i>
          <span slot="title">管理员</span>
        </template>
        <el-menu-item index="/admin/adminList">管理员列表</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: true
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    height: 100%;
  }
  .fa {
    margin-right: 10px;
  }
</style>
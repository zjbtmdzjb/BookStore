<template>
  <el-container direction="vertical">
    <admin-header></admin-header>
    <el-container class="main">
      <side-bar></side-bar>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AdminHeader from '../../components/adminheader'
import SideBar from '../../components/sideBar'
export default {
name: 'Index',
components: {
    AdminHeader,
    SideBar
}
}
</script>

<style lang="scss" scoped>
  .main {
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;
    .main__bread {
      margin-bottom: 20px;
    }
  }
</style>
<template>
  <el-header>
      <el-row>
          <el-col :span="4" class="header__logo">
              <img src="../assets/logo.png" style="height:100%;">
          </el-col>
          <el-col :span="14" class="header__searchtool">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input21">
              <el-button slot="append" icon="el-icon-search" class="searchbutton"></el-button>
            </el-input>
            
          </el-col>
          <el-col :span="6" class="header__user">
              <el-button type="danger" @click="login">登录/注册</el-button>
          </el-col>
      </el-row>
      
      <!-- 登录框 -->
      <el-dialog
        :visible.sync="loginboxVisible"
        width="30%">
        <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-top:-60px;width:85%;" class="LoginTitle">
          <el-tab-pane label="登录" name="login">
            <el-input v-model="input" placeholder="请输入账号" style="width:90%"></el-input>
            <el-input v-model="input" placeholder="请输入密码" style="width:90%"></el-input>
            <el-button type="danger" @click="loginboxVisible = false" style="width:70%">登 录</el-button>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <el-input v-model="input" placeholder="请输入账号" style="width:90%"></el-input>
            <el-input v-model="input" placeholder="请输入密码" style="width:90%"></el-input>
            <el-input v-model="input" placeholder="请输入邮箱" style="width:90%"></el-input>
            <el-button type="danger" @click="loginboxVisible = false" style="width:70%">注册</el-button>
          </el-tab-pane>
        </el-tabs>
      </el-dialog>
  </el-header>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      loginboxVisible:false,
      activeName:'login',
      username:''
    }
  },
  methods: {
    login:function(){
      this.loginboxVisible = true
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .el-header{
    padding-left: 0;
    padding-right: 0;
    line-height: 80px;
    background-color: rgb(255, 255, 255);
    box-shadow:0px 20px 0px #FD5B78;

    .header__logo{
      height: 80px;
    }
  }

  .h4{
    padding: 0;
    margin: 0;
    display: inline;
  }
  
</style>

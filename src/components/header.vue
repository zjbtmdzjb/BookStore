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
              <el-button v-if="!this.username" type="danger" @click="onlogin">登录/注册</el-button>
              <el-dropdown v-if="this.username">
                <el-button type="danger">
                  {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>查看订单</el-dropdown-item>
                  <el-dropdown-item @click.native="exitLogin()">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
          </el-col>
      </el-row>
      
      <!-- 登录框 -->
      <el-dialog
        :visible.sync="loginboxVisible"
        width="30%">
        <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-top:-60px;width:85%;" class="LoginTitle">
          <el-tab-pane label="登录" name="login">
            <el-form ref="form" :model="loginform" label-width="80px">
              <el-form-item label="用户名">
                <el-input v-model="loginform.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" v-model="loginform.password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="userlogin()" style="width:100%">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <el-form ref="form" :model="registerform" label-width="80px">
              <el-form-item label="用户名">
                <el-input v-model="registerform.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" v-model="registerform.password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="registerform.email" placeholder="请输入邮箱"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="userregister()" style="width:100%">注册</el-button>
              </el-form-item>
            </el-form>
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
      API_HOST: window.API_HOST,
      loginboxVisible:false,
      activeName:'login',
      username:'',
      loginform:[],
      registerform:[]
    }
  },
  created() {
    this.username = sessionStorage.getItem('username')
  },
  methods: {
    onlogin:function(){
      this.loginboxVisible = true
    },
    userlogin:function(){
      if(!this.loginform.username || !this.loginform.password){
        this.$message.warning('请填写完整的登录信息')
        return false
      }
      axios.post(API_HOST+"user/userlogin.action",{
        username:this.loginform.username,
        password:this.loginform.password
      })
      .then((res) => {
        if(res.data){
          this.$message.success("登陆成功")
          this.loginboxVisible = false
          sessionStorage.setItem('username',res.data.username)
          this.username = res.data.username
        }else{
          this.$message.error("用户名或密码错误")
        }
      })
      .catch((err) => {
        this.$message.error(err)
      }) 
    },
    exitLogin:function(){
      this.username = ''
      sessionStorage.removeItem('username')
      this.$message.success("退出成功")
    },
    userregister:function(){
      if(!this.registerform.username || !this.registerform.password || !this.registerform.email){
        this.$message.warning('请填写完整的注册信息')
        return false
      }
      axios.post(API_HOST+"user/userregister.action",{
        username:this.registerform.username,
        password:this.registerform.password,
        email:this.registerform.email
      })
      .then((res) => {
        if(res.data){
          this.$message.success("注册成功")
          this.loginboxVisible = false
          sessionStorage.setItem('username',res.data.username)
          this.username = res.data.username
        }else{
          this.$message.error("用户名重复或注册信息不正确")
        }
      })
      .catch((err) => {
        this.$message.error(err)
      })
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

<template>
  <el-row class="main">
      <el-card class="login__box">
        <div slot="header" class="login__header">
            <span> <i class="fa fa-sign-in"></i> 欢迎登录 网上书店</span>
        </div>
        <el-form ref="form" :model="adminForm">
            <el-form-item>
                <el-input v-model="adminForm.adminname" style="width:80%" placeholder="管理员账号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="adminForm.password" style="width:80%" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" style="width:70%">登录</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="default" @click="onSubmit" style="width:70%">返回</el-button>
            </el-form-item>
        </el-form>
      </el-card>

  </el-row>
</template>

<script>
import axios from 'axios'
import HeadTop from '../../components/header'

export default {
  name: 'list',
  data () {
    return {
      adminForm:[]
    }
  },
  components: {
    HeadTop,
  },
  methods: {
    getHello:function() {
      axios.get('http://localhost:8080/BookStoreOnline/user/hello')
      .then(function(res) {
        console.log(res)
      })
      .catch(function (response){
        console.log(response);//发生错误时执行的代码
      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main{
    position: absolute;
    padding: 0;
    margin: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/background.jpg');
    background-size: cover;
    background-position: 50%;

    .login__box{
        width: 400px;
        margin: 0 auto;
        margin-top: 100px;
    }

    .login__header {
        font-weight: bold;
        text-align: left;
    }
}
</style>

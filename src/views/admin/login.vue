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
                <el-button type="primary" @click="adminLogin()" style="width:70%">登录</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="default" @click="onSubmit" style="width:70%">返回</el-button>
            </el-form-item>
        </el-form>
      </el-card>

  </el-row>
</template>

<script>
import router from '../../router/index'
import axios from 'axios'
import HeadTop from '../../components/header'

export default {
  name: 'list',
  data () {
    return {
      API_HOST: window.API_HOST,
      adminForm:[]
    }
  },
  components: {
    HeadTop,
  },
  methods: {
    adminLogin:function(){
      if(!this.adminForm.adminname || !this.adminForm.password){
        this.$message.warning('请填写完整的登录信息')
        return false
      }
      axios.post(API_HOST+'admin/adminlogin.action',{
        adminname:this.adminForm.adminname,
        password:this.adminForm.password
      })
      .then((res) => {
        if(res.data){
          this.$message.success("登陆成功")
          sessionStorage.setItem('adminName',res.data.adminname)
          this.$router.push({path:'/admin/index'})
        }else{
          this.$message.error("用户名或密码错误")
        }
      })
      .catch((err) => {
        $this.$message.error(err)
      })
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

<template>
  <el-row class="list">
    <head-top style="height:80px"></head-top>
    <p class="toolbar"></p>

    <el-row class="list__container">
      <el-row class="menu" :gutter="20">
        <el-col :span="6">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">导航一</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            
          </el-menu>
        </el-col>

        <el-col :span="18">
            <h2><i class="el-icon-news"></i> 分类</h2>
            <el-row :gutter="20">
                <el-col :span="8" v-for="item in 6" :key="item" style="margin-bottom:20px">
                    <el-card shadow="hover">
                    <img src="http://img3.winxuancdn.com/6571/1201586571_0_1_350x350.jpg?1509950248773" class="image">
                    <div style="padding: 14px;">
                        <span>中国共产党章程</span>
                        <div class="bottom clearfix">
                        <el-button type="text" class="button" style="color:#FD5B78">查看详细</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
            </el-col>
        </el-row>

        <div class="block">
            <el-pagination
            background
            layout="prev, pager, next"
            :total="50">
            </el-pagination>
        </div>
    </el-row>

  </el-row>
</template>

<script>
import axios from 'axios'
import HeadTop from '../../components/header'

export default {
  name: 'list',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  .list{
    margin: 0;
    padding: 0;
    top:0;
    background-color: rgb(250, 250, 250);
    position: absolute;
    width: 100%;

    .list__container{
      width: 1200px;
      margin: 0 auto;
    }

    .toolbar{
      width: 100%;
      height: 30px;
      background-color: #FD5B78;
      box-shadow:0px 10px 0px #FD5B78;
    }

    .introduction__container{
      text-align: left;
    }

    .image{
      width: 100%;
      display: block;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
</style>

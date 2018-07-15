<template>
  <el-row class="home">
    <head-top style="height:80px"></head-top>
    <!--  走马灯 -->
    <el-row>
      <p class="toolbar"></p>
      <el-carousel :interval="5000" arrow="always" trigger="click">
        <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-row>

    <el-row class="home__container">
      <el-row class="menu" :gutter="20">
        <el-col :span="6">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <a href="#/book?type=">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">文学</span>
              </el-menu-item>
            </a>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">小说</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">传记</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">历史</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">科普</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">经济</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">法律</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">军事</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">医学</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">计算机</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">工业</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">农林</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">哲学</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">艺术</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">家居</span>
            </el-menu-item>
            
          </el-menu>
        </el-col>

        <el-col :span="18">
          <h2><i class="el-icon-news"></i> 最新上架</h2>
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

      

      <el-row class="introduction">
        <h2><i class="el-icon-news"></i> 精品介绍</h2>
        <el-row class="introduction__container">
            <el-col :span="24" v-for="item in 4" :key="item" style="margin-bottom:15px">
              <el-card shadow="hover">
                <el-row>
                  <el-col :span="8">
                    <img src="https://images-cn.ssl-images-amazon.com/images/I/51Pt6Og6HcL._AC_SR300,300_.jpg"/>
                  </el-col>
                  <el-col :span="16">
                    <h4>介绍</h4>
                    <p>《银河帝国》，作者：艾萨克·阿西莫夫（英语：Isaac Asimov，1920年1月2日－1992年4月6日），
                      在机器人的帮助下，人类迅速掌握了改造外星球的技术，开启了恢弘的星际殖民运动；
                      人类在银河系如蝗虫般繁衍扩张，带着他们永不磨灭的愚昧与智慧、贪婪与良知，登上了一个
                      个荒凉的星球，并将银河系卷入漫长的星际战国时代，直至整个银河被统一，一个统治超过2500万
                      个住人行星、疆域横跨十万光年、总计数兆亿人口的庞大帝国崛起——银河帝国。</p>
                    <el-button type="danger" round>查看详细</el-button>
                  </el-col>
                </el-row>
                
              </el-card>
            </el-col>
        </el-row>
      </el-row>

      <el-row class="recommend">
        <h2><i class="el-icon-news"></i> 好书推荐</h2>
        <el-row :gutter="20">
            <el-col :span="8" v-for="item in 6" :key="item" style="margin-bottom:20px">
              <el-card shadow="hover">
                <img src="http://img3.winxuancdn.com/6571/1201586571_0_1_350x350.jpg?1509950248773" class="image">
                <div style="padding: 14px;">
                  <span>中国共产党章程</span>
                  <div class="bottom clearfix">
                    <el-button type="danger" class="button" plain>查看详细</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
        </el-row>
      </el-row>
    </el-row>
  <p class="toolbar"></p>
  </el-row>
</template>

<script>
import axios from 'axios'
import HeadTop from '../../components/header'

export default {
  name: 'home',
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
  .home{
    margin: 0;
    padding: 0;
    top:0;
    background-color: rgb(250, 250, 250);
    position: absolute;
    width: 100%;

    .menu{
      a{
        text-decoration: none;
        color: black;
      }
      a:visited{
        color: black;
      }
    }

    .home__container{
      width: 1200px;
      margin: 0 auto;
    }

    .toolbar{
      width: 100%;
      height: 30px;
      background-color: #FD5B78;
      box-shadow:0px 20px 0px #FD5B78;
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

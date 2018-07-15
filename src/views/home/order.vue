<template>
  <el-row class="book">
    <head-top style="height:80px"></head-top>
    <p class="toolbar"></p>

    <div class="book__container">

        <el-row>
            <el-col :span="10">
                <img src="http://img3.winxuancdn.com/6571/1201586571_0_1_350x350.jpg?1509950248773" class="image" border="1">
            </el-col>
            <el-col :span="14">
                <div class="book__info">
                    <h3>中国共产党章程</h3>
                    <hr>
                    <p>定价</p>
                    <p>作者</p>
                    <p>所属分类</p>
                </div>
                <el-button type="danger">确认购买</el-button>
                <el-button>取消订单</el-button>
            </el-col>
        </el-row>
    </div>

    <p class="toolbar"></p>
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
  .book{
    margin: 0;
    padding: 0;
    top:0;
    background-color: rgb(250, 250, 250);
    position: absolute;
    width: 100%;

    .book__container{
      width: 1200px;
      margin: 0 auto;
    }

    .book__nav{
        padding:20px;
    }

    .toolbar{
      width: 100%;
      height: 30px;
      background-color: #FD5B78;
      box-shadow:0px 10px 0px #FD5B78;
    }

    .book__image{
        border: 1px solid black;
    }

    .book__info{
        padding-left: 20px;
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

<template>
  <el-row class="book">
    <head-top style="height:80px"></head-top>
    <p class="toolbar"></p>

    <div class="book__container">
        <div class="book__nav">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">分类1</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">分类2</a></el-breadcrumb-item>
            </el-breadcrumb>
        </div>

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
            </el-col>
        </el-row>
        <p class="toolbar"></p>
        <el-row>
          <h3>书籍简介</h3>
            <el-col>
                <p>中国共产党是中国工人阶级的先锋队，同时是中国人民和中华民族的先锋队，是中国特色社会主义事业的领导核心，代表中国先进生产力的发展要求，代表中国先进文化的前进方向，代表中国最广大人民的根本利益。党的最高理想和最终目标是实现共产主义。</p>
            </el-col>
        </el-row>
        <p class="toolbar"></p>
        <el-row>
          <h3>商品评论</h3>
            <el-col v-for="item in 6" :key="item">
              <el-row>
                <el-card shadow="hover" style="margin-bottom:20px;">
                <el-col :span="6" >
                  <p>木头勺子</p>
                  <p>2018/7/15</p>
                </el-col>
                <p> 各界人士推荐的一本书，喜欢这句: 生活不能等待别人来安排，要自己去争取和奋斗；而不论其结果是喜是悲，但可以慰藉的是，你总不枉在这世界上活了一场。有了这样的认识，你就会珍重生活，而不会玩世不恭；同时，也会给人自身注入一种强大的内在力量。</p>
                </el-card>
              </el-row>
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

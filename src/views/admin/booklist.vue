<template>
<el-row>
  <el-form :inline="true" :model="formInline" size="small" class="book__form">
      <el-form-item class="form__item">
        <el-input v-model="formInline.name" placeholder="书名"></el-input>
      </el-form-item>
      <el-form-item class="form__item">
        <el-button type="primary" >查询</el-button>
        <el-button type="primary" @click="addNewBook = true">新增</el-button>
      </el-form-item>
  </el-form>

  <el-dialog
    title="提示"
    :visible.sync="addNewBook"
    width="30%"
    :before-close="handleClose">
    <el-upload
      class="upload-demo"
      :action="API_HOST+'book/uploadimg.action'"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :on-success = "getImg"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </el-dialog>

  <el-table
    :data="tableData"
    style="width: 100%"
    class="booklist__table">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      property="date"
      label="日期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="书名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="presentation"
      label="内容介绍"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
     label="操作"
     width="150">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-row>
</template>

<<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        API_HOST: window.API_HOST,
        addNewBook:false,
        adminName:'',
        onlineIP:'',
        fileList:[],
        formInline: {
          name:''
        },
        tableData: [{
          date: '2016-05-02',
          name: '共产党宣言',
          presentation: '《共产党宣言》，是卡尔·马克思和费里德里希·恩格斯为共产主义者同盟（Communist League）起草的纲领，国际共产主义运动第一个纲领性文献，阐述了阶级矛盾对人类历史的影响 [1]  ，马克思主义诞生的重要标志。由马克思执笔写成 。1848年2月21日在伦敦第一次以单行本问世。2月24日，《共产党宣言》正式出版。宣言第一次全面系统地阐述了科学社会主义理论，指出共产主义运动将成为不可抗拒的历史潮流。2015年11月，被评为最具影响力的20本学术书之一。2018年，《共产党宣言》发表170周年，回望《共产党宣言》诞生以来的170年，人类社会见证了种种思潮的激荡，经历了无尽的风云变幻，始终不变的是对和平幸福美好的追求。'
        }, {
          date: '2016-05-04',
          name: '共产党宣言',
          presentation: '《共产党宣言》，是卡尔·马克思和费里德里希·恩格斯为共产主义者同盟（Communist League）起草的纲领，国际共产主义运动第一个纲领性文献，阐述了阶级矛盾对人类历史的影响 [1]  ，马克思主义诞生的重要标志。由马克思执笔写成 。1848年2月21日在伦敦第一次以单行本问世。2月24日，《共产党宣言》正式出版。宣言第一次全面系统地阐述了科学社会主义理论，指出共产主义运动将成为不可抗拒的历史潮流。2015年11月，被评为最具影响力的20本学术书之一。2018年，《共产党宣言》发表170周年，回望《共产党宣言》诞生以来的170年，人类社会见证了种种思潮的激荡，经历了无尽的风云变幻，始终不变的是对和平幸福美好的追求。'
        }, {
          date: '2016-05-01',
          name: '共产党宣言',
          presentation: '《共产党宣言》，是卡尔·马克思和费里德里希·恩格斯为共产主义者同盟（Communist League）起草的纲领，国际共产主义运动第一个纲领性文献，阐述了阶级矛盾对人类历史的影响 [1]  ，马克思主义诞生的重要标志。由马克思执笔写成 。1848年2月21日在伦敦第一次以单行本问世。2月24日，《共产党宣言》正式出版。宣言第一次全面系统地阐述了科学社会主义理论，指出共产主义运动将成为不可抗拒的历史潮流。2015年11月，被评为最具影响力的20本学术书之一。2018年，《共产党宣言》发表170周年，回望《共产党宣言》诞生以来的170年，人类社会见证了种种思潮的激荡，经历了无尽的风云变幻，始终不变的是对和平幸福美好的追求。'
        }, {
          date: '2016-05-03',
          name: '共产党宣言',
          presentation: '《共产党宣言》，是卡尔·马克思和费里德里希·恩格斯为共产主义者同盟（Communist League）起草的纲领，国际共产主义运动第一个纲领性文献，阐述了阶级矛盾对人类历史的影响 [1]  ，马克思主义诞生的重要标志。由马克思执笔写成 。1848年2月21日在伦敦第一次以单行本问世。2月24日，《共产党宣言》正式出版。宣言第一次全面系统地阐述了科学社会主义理论，指出共产主义运动将成为不可抗拒的历史潮流。2015年11月，被评为最具影响力的20本学术书之一。2018年，《共产党宣言》发表170周年，回望《共产党宣言》诞生以来的170年，人类社会见证了种种思潮的激荡，经历了无尽的风云变幻，始终不变的是对和平幸福美好的追求。'
        }]
      }
    },
    components: {
     
    },
    created(){
      
    },
    methods:{
      getImg:function(response, file, fileList){
        console.log(response)
        console.log(file)
      }
    },
    mounted(){
        var self = this;
        axios.get('http://ip-api.com/json/')
        .then(function(res){
        if(res.status == 200){
            self.onlineIP = res.data.query;
        }
        })
    }
  }
</script>

<style lang="scss" scoped>
.booklist__table{
  text-align: left;
}
.book__form {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #eef1f6;
    text-align: left;
    .form__item {
      margin-bottom: 0px;
    }
  }
</style>
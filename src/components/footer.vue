<template>
  <el-footer>
    <el-row>
        <p>网上书店项目</p>
    </el-row>
    
  </el-footer>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username:''
    }
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-footer{
    padding-left: 0;
    padding-right: 0;
    line-height: 80px;
    background-color: rgb(255, 255, 255);
    box-shadow:0px -10px 0px #FD5B78;
  }
  
</style>

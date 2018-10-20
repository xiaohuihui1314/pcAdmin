<template>
  <div>
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </div>

</template>
<style>

</style>
<script>
  export default{
    data(){
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    filters: {
      filterNum: function(val) {
        const ss = String(val).split("").reverse();
        let str = "";
        for (let i = 1; i <= ss.length; i++) {
          str += ss[i - 1];
          if (i % 3 === 0 && i !== ss.length) {
            str += ",";
          }
        }
        return str.split("").reverse().join("");
      }
    }
  }
</script>

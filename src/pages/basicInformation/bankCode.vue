<template>
  <div>
    <section class="toolbar-wrap">
      <div class="lef-btn-wrap">
        <button type="button" @click="addUsers">添加角色</button>
      </div>
    </section>
    <!--表格-->
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">

      <el-table-column
        prop="name"
        label="银行名称">
      </el-table-column>
      <el-table-column
        prop="code"
        label="银行代码">
      </el-table-column>
      <el-table-column
        width="100"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deletsClick(scope.row)" type="text" size="small" class="red-text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <el-pagination
      background
      class="pagination-wrap"
      layout="prev, pager, next, sizes, jumper"
      :total="1000">
    </el-pagination>
    <el-dialog
      title="添加银行"
      :visible.sync="dialogVisible"
      width="500px"
      custom-class="modal-wrap"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="银行名称：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="银行代码：">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">添加</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        search: '',
        tableData: [{
          name: '中国银行',
          code: '10ASDasdAA',
        },{
          name: '中国银行1',
          code: '10ASDasdAAsa',
        },{
          name: '中国银行2',
          code: '10ASDasdAAs',
        },{
          name: '中国银行3',
          code: '10ASDasdAAd',
        },],
        dialogVisible: false,
        form: {
          account: '',
          name: '',
          password: '',
          role: '',
          state: ''
        }
      }
    },
    methods: {
      editClick(item){
        Object.assign(this.form, item);
        this.dialogVisible = true;
      },
      deletsClick(){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      addUsers(){
        Object.assign(this.form, {
          account: '',
          name: '',
          password: '',
          role: '',
          state: ''
        });
        this.dialogVisible = true;
      },
      handleClose(){
        this.dialogVisible = false;
      },
      onSubmit(){
        console.log(this.form)
      }
    }
  };
</script>
<style lang="scss" scoped>
  .toolbar-wrap {
    .lef-btn-wrap {
      button {
        width: 100px;
        height: 40px;
        line-height: 40px;
        border: none;
        border-radius: 4px;
        background-color: #00a9c6;
        color: #fff;
      }
    }
  }

  .pagination-wrap {
    float: right;
    margin-top: 25px;
  }

</style>
<style>
  .search-input input {
    border-radius: 0;
  }

  .modal-wrap .el-dialog__header {
    padding: 15px;
    background-color: #d7d7d7;
  }
</style>

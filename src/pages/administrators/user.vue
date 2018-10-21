<template>
  <div>
    <section class="toolbar-wrap">
      <div class="search">
        <el-input class="search-input" v-model="search" placeholder="请输入内容"></el-input>
        <button class="search-btn" @click="searchEvent">搜索</button>
      </div>
      <div class="lef-btn-wrap">
        <button type="button" @click="addUsers">添加用户</button>
      </div>
    </section>
    <!--表格-->
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="account"
        label="管理账号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="真实姓名">
      </el-table-column>
      <el-table-column
        prop="role"
        label="角色">
      </el-table-column>
      <el-table-column
        prop="state"
        label="账号状态">
      </el-table-column>
      <el-table-column
        prop="date"
        label="创建时间">
      </el-table-column>
      <el-table-column
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
    <!--添加用户-->
    <el-dialog
      title="添加用户"
      :visible.sync="dialogVisible"
      width="500px"
      custom-class="modal-wrap"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="form.role" placeholder="请选择一个角色">
            <el-option label="销售" value="shanghai"></el-option>
            <el-option label="客服" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="账号状态">
          <el-radio-group v-model="form.state">
            <el-radio label="1">开始</el-radio>
            <el-radio label="0">关闭</el-radio>
          </el-radio-group>
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
          id: '100',
          account: '100',
          name: 'admin',
          role: '超级管理员',
          state: '开始',
          date: '2016-05-02',
        }, {
          id: '100',
          account: '100',
          name: 'admin',
          role: '超级管理员',
          state: '开始',
          date: '2016-05-02',
        }, {
          id: '100',
          account: '100',
          name: 'admin',
          role: '超级管理员',
          state: '开始',
          date: '2016-05-02',
        }, {
          id: '100',
          account: '100',
          name: 'admin',
          role: '超级管理员',
          state: '开始',
          date: '2016-05-02',
        }, {
          id: '100',
          account: '100',
          name: 'admin',
          role: '超级管理员',
          state: '开始',
          date: '2016-05-02',
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
      searchEvent(){
        console.log('搜索')
      },
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
    .search {
      float: left;
      width: 250px;
      .search-input {
        float: left;
        width: 200px;
        border-radius: 4px 0 0 4px;
        input {
          border-radius: 0;
        }
      }
      button {
        float: left;
        width: 50px;
        height: 40px;
        line-height: 40px;
        border: none;
        border-radius: 0 4px 4px 0;
        background-color: #0099ff;
        color: #fff;
      }
    }
    .lef-btn-wrap {
      float: right;
      button {
        width: 100px;
        height: 40px;
        line-height: 40px;
        border: none;
        border-radius: 4px;
        background-color: #00cc00;
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

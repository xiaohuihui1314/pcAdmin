<template>
  <div>
    <section class="toolbar-wrap">
      <div class="lef-btn-wrap">
        <button type="button" @click="addUsers">添加商户</button>
      </div>
      <div class="lef-btn-wrap">
        <button type="button" @click="addUsers">添加商户</button>
      </div>
    </section>
    <!--表格-->
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
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
    <!--添加角色-->
    <el-dialog
      title="添加商户"
      :visible.sync="dialogVisible"
      width="700px"
      custom-class="modal-wrap"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="100px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="商户名称：">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="联系人姓名：">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="出生年月：">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="证件类型：">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="现住地址：">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="身份证号：">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="户籍地址：">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="性别：">
              <el-select v-model="form.role" placeholder="请选择性别">
                <el-option label="男" value="0"></el-option>
                <el-option label="女" value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系手机：">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="身份证正面：">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系电话：">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="身份证反面：">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电子邮箱：">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label-width="0" style="text-align: center">
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
      float: right;
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
      display: inline-block;
      margin: 0 10px;
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

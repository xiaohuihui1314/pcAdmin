<template>
  <div>
    <section class="toolbar-wrap">
      <label>账号状态：</label>
      <el-select v-model="searchObj.accountState" placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <label>注册时间：</label>
      <el-date-picker
        v-model="searchObj.time"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <el-button type="primary" >类型管理</el-button>
      <el-button type="primary" @click="addUsers">添加机构</el-button>
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
      <el-form ref="form" :model="form" label-width="120px">

        <el-form-item label="机构名称：">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="机构类型：">
          <el-select v-model="form.role" placeholder="请选择">
            <el-option label="销售" value="shanghai"></el-option>
            <el-option label="客服" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="兑换规则：">
          <el-row :gutter="20">
            <el-col :span="12"> <el-input v-model="form.password"></el-input></el-col>
            <el-col :span="12"><el-input v-model="form.password"></el-input></el-col>
          </el-row>


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
        searchObj: {
          accountState: '',
          auditingState: '',
          search: '',
        },
        options1: [{
          value: '0',
          label: '冻结'
        }, {
          value: '1',
          label: '正常',
        }],
        options2: [{
          value: '0',
          label: '审核中'
        }, {
          value: '1',
          label: '审核不通过',
        }, {
          value: '2',
          label: '已认证',
        }],
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

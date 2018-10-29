<template>
  <div>
    <section class="toolbar-wrap">
      <div class="search">
        <el-input class="search-input" v-model="query.name" placeholder="请输入账号搜索"></el-input>
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
      :width="dialogWidth"
      custom-class="modal-wrap"
      :before-close="handleClose">
      <!--注册用户-->
      <el-form ref="form" :model="form" label-width="80px" v-if="modalState">
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
      <div v-if="!modalState">
        <div class="tree-wrap" v-for="(item, index) in accessList" :key="index">
          <el-checkbox class="tree-checkbox" v-model="item.checked" @change="reverseSelection(item,index)">{{item.name}}
          </el-checkbox>
          <div class="tree-box clear">
            <div class="tree-item" v-for="(item1, index1) in item.children" :key="index1">
              <el-checkbox class="tree-checkbox" v-model="item1.checked" @change="selectTree(item1,index)">{{item1.name}}</el-checkbox>
              <div class="tree-box clear">
                <div class="tree-item" v-for="(item2, index2) in item1.children" :key="index2">
                  <el-checkbox class="tree-checkbox" v-model="item2.checked" @change="selectTree(item2,index,item1)">
                    {{item2.name}}
                  </el-checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
        <el-button type="primary" @click="getList">获取</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import access from '@/config/access';
  export default {
    data(){
      return {
        search: '',
        tableData: [],
        dialogWidth: '500px',
        dialogVisible: false,
        modalState: false,
        form: {
          account: '',
          name: '',
          password: '',
          role: '',
          state: ''
        },
        query: {
          server_no: '503301',
          limit: 10,
          name: ''
        },
        accessList: access.list
      }
    },
    mounted(){
      console.log(this.accessList);
      this.getUserList();
    },
    methods: {
      async getUserList(){
        const res = await  this.$get('/qry_jifen_user_list.cgi', this.query);
        console.log(res)
      },
      getList(){
        const array = [];
        this.accessList.map(item => {
          const a = i => {
            if (i.index) {
              if (i.checked) {
                array[i.index - 1] = 1
              } else {
                array[i.index - 1] = 0
              }
            }
            i.children && i.children.map(a)
          };
          a(item);
        });
      },
      reverseSelection(item, index){
        if (!item.checked) {
          this.accessList[index].children.map(i => {
            i.checked = false;
            i.children && i.children.map(o => {
              o.checked = false;
            });
          })
        }
      },
      selectTree(item, index, parentItem){
        if (item.checked && index) {
          this.accessList[index].checked = true;
        }
        if (parentItem) {
          parentItem.checked = true;
          this.accessList[index].checked = true;
        }
      },
      searchEvent(){
        this.getUserList();
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
        this.modalState = false;
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
        background-color: #00a9c6;
        color: #fff;
      }
    }
  }

  .pagination-wrap {
    float: right;
    margin-top: 25px;
  }

  .tree-box {
    margin-left: 25px;
    .tree-item {
      float: left;
      width: 50%;
    }
  }

  .tree-wrap, .tree-checkbox {
    margin-bottom: 5px;
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

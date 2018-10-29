<template>
  <div class="custom-tree-container">
    <section class="toolbar-wrap">
      <div class="lef-btn-wrap">
        <button type="button" @click="addUsers">添加角色</button>
      </div>
    </section>
    <div class="block">
      <p style="padding: 0 250px 0 25px; ">省份
      <span style="float: right">操作</span>
      </p>
      <el-tree
        :data="data5"
        node-key="id"
        default-expand-all
        :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="append(data)">
            上移
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="remove(node, data)">
            下移
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="remove(node, data)">
            添加同级
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="addUsers1(node, data)">
            添加子级
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="remove(node, data)">
            修改
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="remove(node, data)">
            删除
          </el-button>
        </span>
      </span>
      </el-tree>
    </div>
    <!--添加省份-->
    <el-dialog
      title="添加省份"
      :visible.sync="dialogVisible"
      width="500px"
      custom-class="modal-wrap"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="130px">
        <el-form-item label="省份名称：">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label-width="0" style="text-align: center">
          <el-button type="primary" @click="onSubmit">添加</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!--添加子级-->
    <el-dialog
      title="添加子项目"
      :visible.sync="dialogVisible1"
      width="500px"
      custom-class="modal-wrap"
      :before-close="handleClose1">
      <el-form ref="form" :model="form1" label-width="80px">
        <el-form-item label="名称：">
          <el-input v-model="form1.password"></el-input>
        </el-form-item>
        <el-form-item label-width="0" style="text-align: center">
          <el-button type="primary" @click="onSubmit">添加</el-button>
          <el-button @click="handleClose1">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
  let id = 1000;

  export default {
    data() {
      const data = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
      return {
        data4: JSON.parse(JSON.stringify(data)),
        data5: JSON.parse(JSON.stringify(data)),
        dialogVisible:false,
        dialogVisible1:false,
        form:{

        },
        form1:{

        },
      }
    },

    methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      addUsers(){
        this.dialogVisible = true;
      },
      handleClose(){
        this.dialogVisible = false;
      },
      addUsers1(){
        this.dialogVisible1 = true;
      },
      handleClose1(){
        this.dialogVisible1 = false;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
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


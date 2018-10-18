<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <homeMenu/>
    <homeContainer/>
  </el-container>

</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  import homeMenu from './menu';
  import homeContainer from './container';
  export default {
    components: {
      homeMenu,
      homeContainer
    },
  };
</script>

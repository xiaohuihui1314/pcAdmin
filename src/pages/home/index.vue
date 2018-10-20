<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <homeMenu/>
    <homeContainer/>
  </el-container>

</template>
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

<script>
export default {
  name: "HelloWorld"
}
</script>

<template>
  <div>
    <el-row>
      <el-button id="mo">默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>

</template>

<style scoped lang="scss">

//测试scss

$whiteColor: black;

#mo {
  background-color: $whiteColor;
}

</style>
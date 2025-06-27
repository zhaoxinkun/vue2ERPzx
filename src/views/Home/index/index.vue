<script>
export default {
  name: "homeIndex"
}
</script>

<template>

  <!--  内容区-->
  <div class="content">

    <!--第一行-->
    <div class="content-row">

      <!--      列-->
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="16" :lg="16">
          <div class="grid-content bg-purple">3</div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
          <div class="grid-content bg-purple">3</div>
        </el-col>
      </el-row>
    </div>


    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="8" :lg="8">
        <div class="grid-content bg-purple">3</div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8">
        <div class="grid-content bg-purple">3</div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8">
        <div class="grid-content bg-purple">3</div>
      </el-col>
    </el-row>


  </div>



</template>
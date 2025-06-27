<script>
export default {
  name: "breadCrumb",
  computed: {
    breadCrumbs() {
      // 使用路由对象,拿到我们的路由的历史路径信息
      return this.$route.matched.slice(1).map(route => ({
        path: route.path,
        breadcrumb: route.meta.breadcrumb
      }))
    }
  }
}
</script>

<template>

  <el-breadcrumb separator-class="el-icon-arrow-right">
    <span> <i class="el-icon-s-home"> </i>当前位置:</span> &nbsp;&nbsp;
    <el-breadcrumb-item v-for='(crumb,index) in breadCrumbs'
                        :to="(index !== 0 && index !==breadCrumbs.length-1) ? crumb.path : undefined" :key="index">
      {{ crumb.breadcrumb }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

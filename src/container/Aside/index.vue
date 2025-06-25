<script>
import Menu from "./Menu/menu.vue"

export default {
  name: "Aside",
  components: {
    Menu,
  }
}
</script>

<template>
  <el-aside width="200px" class="aside">
    <Menu></Menu>
  </el-aside>
</template>

<style scoped>

</style>
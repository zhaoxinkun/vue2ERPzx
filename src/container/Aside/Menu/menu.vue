<script>
// 导入菜单数据
import itemData from "@/utils/menuData"

// 导入item组件
import menuItem from "./menuItem.vue";

export default {
  name: "Menu",
  data() {
    return {
      // 本地化数据
      itemData
    }
  },
  components: {
    menuItem
  }
}
</script>

<template>
  <el-menu
      default-active="$route.path"
      class="el-menu-vertical-demo el-menu"
      router
      exact
  >
    <menu-item v-for="item in itemData"  :key="item.url" :item="item"></menu-item>
  </el-menu>
</template>
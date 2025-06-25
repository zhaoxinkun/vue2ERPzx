<script>
import {Aside, Header, Main} from "./index"

export default {
  name: "container",
  components: {
    Aside,
    Header,
    Main
  }
}
</script>

<template>
  <div class="app-wrapper">
    <el-container>

      <!--      侧边栏-->
      <Aside></Aside>

      <el-container>

        <!--头部-->
        <el-header>
          <Header></Header>
        </el-header>

        <!--        主体-->
        <el-main>
          <Main></Main>
        </el-main>

      </el-container>

    </el-container>
  </div>
</template>
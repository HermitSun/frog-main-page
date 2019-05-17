<template>
  <el-container class="app">
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <el-main>
      <transition name="el-zoom-in-center">
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
  import NavBar from "@/components/NavBar";

  export default {
    name: "Introduction",
    components: {NavBar}
  };
</script>

<style scoped>
  .app {
    background-color: #282c34;
    height: 100vh;
  }

  .el-header {
    padding-left: 0;
    padding-right: 0;
  }
</style>

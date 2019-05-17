<template>
  <el-container class="app">
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <el-main>
      <!--这里就不把这个页面单独提出一个路由了，主要是懒-->
      <div v-if="$route.path === '/introduction'"
           class="introduction">
        <br/>
        <div class="introduction-content">
          <div class="title">公司简介</div>
          <br/>
          <br/>
          <p>
            <template v-for="i in 100">
              <span>三四百字</span>
            </template>
          </p>
        </div>
        <!--轮播-->
        <el-carousel indicator-position="outside"
                     height="80vh"
                     @change="handleCarouselChange">
          <el-carousel-item v-for="i in 3" :key="i">
            <el-image :src="require(`./images/bg${i}.jpg`)"
                      alt="bg"
                      style="width: 60vw; height: 80vh"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
      <transition name="el-fade-in">
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
  import NavBar from "@/components/NavBar";

  export default {
    name: "Introduction",
    components: {NavBar},
    data() {
      return {};
    },
    methods: {
      handleCarouselChange(newPage, oldPage) {

      }
    }
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

  .introduction {
    color: white;
  }

  .introduction-content {
    width: 30vw;
    position: absolute;
    top: 20vh;
    right: 10vw;
    z-index: 9999;
  }
</style>

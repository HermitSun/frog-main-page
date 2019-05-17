<template>
  <el-container class="app">
    <el-header>
      <NavBar></NavBar>
    </el-header>
    <el-main>
      <!--这里就不把这个页面单独提出一个路由了，主要是懒-->
      <div v-if="$route.path === '/introduction'"
           class="introduction">
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
        <!--简介-->
        <div class="basic-info-wrapper">
          <h1 class="title">- 关 于 我 们 -</h1>
          <ul style="text-align: left; margin-left: 33vw">
            <li style="margin: 1vh auto">上海昱辰网络科技有限公司，致力于软件开发运营及推广。</li>
            <li style="margin: 1vh auto">以人为本、开拓创新</li>
            <li style="margin: 1vh auto">合作、共赢、整合、利他、互助、抱团、联盟</li>
            <li style="margin: 1vh auto">只有合作伙伴，没有竞争对手</li>
            <li style="margin: 1vh auto">将公司打造成军队般的执行力，学校般的学习力，家庭般的幸福工作环境</li>
          </ul>
        </div>
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
        // 暂时不知道能干啥
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

  .basic-info-wrapper {
    margin-top: 3vw;
  }

  .basic-info-wrapper .title {
    margin-bottom: 2vw;
  }
</style>

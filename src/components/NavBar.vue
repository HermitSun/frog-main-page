<template>
  <el-menu :default-active="$route.path"
           mode="horizontal"
           background-color="#545c64"
           text-color="#ffffff"
           active-text-color="#61dafb"
           router>
    <!--LOGO-->
    <el-menu-item class="cursor-default left"
                  disabled>
      <!--      <el-image :src="require('assets/images/logo.png')"-->
      <!--                @click="$router.push('/')"-->
      <!--                alt="logo" id="logo"></el-image>-->
      <p id="logo">上海昱辰网络科技有限公司</p>
    </el-menu-item>
    <!--导航-->
    <template v-for="item of navItems">
      <el-menu-item :index="item.children?item.children[0].path:item.path">
        {{item.name}}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
  export default {
    name: "NavBar",
    computed: {
      // 计算应该显示的导航
      navItems() {
        return this.$router.options.routes.filter(route => {
          return route.path !== '/not-found' && route.path !== '*' && !route.path.hidden;
        });
      }
    }
  };
</script>

<style scoped>
  #logo {
    margin-left: 4vw;
    margin-right: 3vw;
    cursor: pointer;
    font-size: 20px;
  }

  .cursor-default {
    cursor: default;
  }
</style>

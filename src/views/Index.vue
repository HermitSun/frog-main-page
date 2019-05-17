<template>
  <div class="index">
    <header>
      <el-image :src="require('assets/images/logo.png')"
                class="logo"
                alt="logo"></el-image>
    </header>
    <main>
      <div class="body">
        <img :src="require('assets/images/react-logo.svg')"
             class="rotate-logo"
             alt="logo"/>
        <p class="code">欢迎！</p>
        <router-link to="/introduction"
                     class="app-link">
          进一步了解<i class="el-icon-right"></i>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "Index"
  };
</script>

<style scoped>
  .index {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    text-align: center;
  }

  .logo {
    position: absolute;
    top: 5vh;
    left: 23vw;
  }

  .body {
    /*background-color: #282c34;*/
    background-image: url("../assets/images/background.png");
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    font-size: 60px;
    font-weight: bold;
    margin: 6vh auto 4vh;
  }

  .app-link {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    text-decoration: none;
    color: #303133;
    font-size: 24px;
    font-weight: bold;
    margin-top: 10vh;
    margin-right: 2vw;
    padding: 1vw;
    border-top: 2px dashed #61dafb;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    border-left: 2px dashed black;
  }

  .app-link:hover {
    color: black;
    box-shadow: 0 2px 4px #61daff, 0 0 6px #61daff
  }

  .rotate-logo {
    animation: rotate-logo-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
    margin-top: 2vw;
    margin-right: 2vw;
  }

  @keyframes rotate-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

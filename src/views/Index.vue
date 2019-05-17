<template>
  <div class="index">
    <header>
      <el-image :src="require('assets/images/logo.png')"
                class="logo"
                alt="logo"></el-image>
    </header>
    <main class="body">
      <img :src="require('assets/images/react-logo.svg')"
           class="rotate-logo"
           alt="logo"/>
        <p class="code">欢迎！</p>
      <router-link to="/introduction"
                   style="padding: 1vw; border: 1px solid"
                   class="app-link">
        进一步了解...
      </router-link>
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

  .code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    font-size: 60px;
    font-weight: bold;
    margin: 5vw auto 2vw;
  }

  .logo {
    position: absolute;
    top: 3vw;
    left: 23vw;
  }

  .body {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .app-link {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    color: #61dafb;
    text-decoration: none;
    margin-top: 2vw;
    margin-right: 2vw;
    font-size: 24px;
  }

  .app-link:hover {
    color: #61dfff;
    box-shadow: 0 2px 4px #61dafb, 0 0 6px #61dafb
  }

  .rotate-logo {
    animation: rotate-logo-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
    margin-top: -3vw;
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

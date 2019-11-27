<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>Current env is <span style="color:red">{{NODE_ENV}}</span></div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      NODE_ENV: ""
    };
  },
  mounted() {
    const env = window.process1.env.NODE_ENV;
    this.NODE_ENV = env ? env : "production";
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

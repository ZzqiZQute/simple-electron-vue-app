<template>
  <div id="app">
  </div>
</template>

<script>
const {ipcRenderer} = window.electron
export default {
  name: "app",
  data() {
    return {
    };
  },
  mounted() {
    ipcRenderer;
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

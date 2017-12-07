<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- main page -->
    <router-view name="fuck"/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: royalblue;

}
body,html {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>

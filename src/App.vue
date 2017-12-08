<!--<template>
  <div id="app">
     <img src="./assets/logo.png"> -->
    <!-- main page 
    <router-view/>
  </div>
</template>-->
<template id="home">
    <!-- 注意：组件只能有一个根元素，所以我们包装到这个div中 -->
    <div>
        <h2>STAFF PLACE</h2>
        <router-link to="/login_r">登录</router-link>
        <router-link to="/">你好 世界</router-link>
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import '../static/css/bootstrap.css';

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

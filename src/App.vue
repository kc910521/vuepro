<!--<template>
  <div id="app">
     <img src="./assets/logo.png"> -->
    <!-- main page 
    <router-view/>
  </div>
</template>-->
<template id="home" >
    <!-- 注意：组件只能有一个根元素，所以我们包装到这个div中 -->
    <div>
      <div class="row">
        <div class="col-9"></div>
        <div class="col-3 text-right text-truncate">
          <router-link v-if="user == null || user.id == 0" to="/login_r">登录</router-link>
          <router-link to="/login_r" @click.native="logout()" v-else>注销</router-link>
          <router-link to="/main">你好 {{ user.userName }}</router-link>
        </div>
      </div>
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view v-on:userListener="userListener"></router-view>
    </div>
</template>

<script>
import {User} from './assets/js/model'

export default {
  name: 'app',
  data () {
    return {
      user: new User(0, '游客')
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      console.log('initd')
    },
    logout () {
      console.log('logout')
      this.user = new User(0, '游客')
    },
    userListener (data) {
      if (data instanceof User) {
        console.log(`userListener:${data}`)
        this.user = data
      } else {
        console.error(`error user emit in ${data}`)
      }
    }
  }
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
  /* background-color: royalblue; */

}
body,html {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>

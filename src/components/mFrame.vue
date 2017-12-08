<template>
 <div id="top" class="container">
   <ul class="nav nav-pills justify-content-center">
    <li class="nav-item">
      <router-link  to="/h2" class="nav-link active" href="#">首页</router-link>
    </li>
    <li class="nav-item">
      <router-link tag="a" to="/List" class="nav-link" href="#">域名列表</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ name: 'about', params: { userId: 123 }}" class="nav-link" href="#">关于</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link disabled" href="#">Disabled</router-link>
    </li>
  </ul>
  <button v-on:click="logout">注销</button>
  <div>777</div>
  <router-view/>
  <div>888</div>
 </div> 
</template>

<script>
import MyRouter from '../router/index'

const userId = 223

export default {
  MyRouter,
  name: 'mFrame',
  methods: {
    logout: function () {
      MyRouter.push({
        name: 'about',
        params: {userId}
      })
    }
  },
  data () {
    return {
      isActive: true,
      hasError: false
    }
  }
}
</script>
<style>
  
  /* .active>a {
    color: red
  } */
  a:active {
    color: red
  }

  #top {
    background-color: lightblue;
  }


</style>




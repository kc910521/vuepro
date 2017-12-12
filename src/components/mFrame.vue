<template>
 <div id="top" class="container">
   <ul class="nav nav-pills justify-content-center">
      <li v-for="(menu,index) in menus" v-on:click="listClick(index)" class="nav-item">
        <a v-if="menu.to == null" class="nav-link" v-bind:class="{'active':clickIdx==index}" href="javascript:void(0);">{{ menu.name }}</a>
        <router-link tag="a" class="nav-link" v-bind:class="{'active':clickIdx==index}"  :to="{ path: menu.to}" v-else>{{ menu.name }}</router-link>
      </li>
  </ul>
  <div>777</div>
  <router-view/>
  <div>888</div>
 </div> 
</template>

<script>
import MyRouter from '../router/index'

// const userId = 223

const menus1 = [
  {
    name: '首页',
    to: '/h2'
  },
  {
    name: '域名列表',
    to: '/List'
  },
  {
    name: '关于',
    to: 'about/223'
  },
  {
    name: '注销',
    to: '/login_r'
  }
]

export default {
  MyRouter,
  name: 'mFrame',
  methods: {
    listClick: function (index) {
      this.clickIdx = index
      console.log(`cindex:${index}`)
      // MyRouter.push({
      //   name: 'about',
      //   params: {userId}
      // })
    }
  },
  data () {
    return {
      isActive: true,
      hasError: false,
      menus: menus1,
      clickIdx: 0
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




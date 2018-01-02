<template>
  <div id="top" >
    <nav class="navbar fixed-top navbar-expand-lg  navbar-dark bg-primary flex-column flex-md-row">
    <a class="navbar-brand" href="#">ZONE</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li v-for="(menu,index) in menus" v-on:click="listClick(index)" class="nav-item">
          <a v-if="menu.to == null" class="nav-link" v-bind:class="{'active':clickIdx==index}" href="javascript:void(0);">{{ menu.name }}</a>
          <router-link tag="a" class="nav-link" v-bind:class="{'active':clickIdx==index}"  :to="{ path: menu.to}" v-else>{{ menu.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container-fluid">
    <div>777</div>
    <router-view/>
    <div>888</div>
  </div>
  </div>
</template>

<script>

import MyRouter from '../router/index'

// const userId = 223

const menus1 = [
  {
    name: '首页',
    to: '/main/h2'
  },
  {
    name: '域名列表',
    to: '/main/List'
  },
  {
    name: '关于',
    to: '/main/about/223'
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

  #top {
    background-color: lightblue;
  }
  .container-fluid {
    margin-top: 2em;
    min-height: 40em;
  }


</style>




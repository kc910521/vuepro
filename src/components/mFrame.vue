<template>
  <div id="top" >
    <nav class="navbar-expand-lgflex-column flex-md-row fill_position_only" v-if="fixTopic" >
      <a class="navbar-brand" href="#">BLOCK</a>
    </nav>
    <nav class="navbar navbar-expand-lg  navbar-dark bg-primary flex-column flex-md-row" :class="fixTopic?'fixed-top':''" >
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

  <div class="container-fluid" >
    <div>777</div>
    <router-view />
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
      console.log(`${index}`)
      // MyRouter.push({
      //   name: 'about',
      //   params: {userId}
      // })
    },
    scrollPage: function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log(scrollTop)
      if (scrollTop > 30) {
        this.fixTopic = true
      } else {
        this.fixTopic = false
      }
      console.log(`fixTopic:${this.fixTopic}`)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollPage)
  },
  data () {
    return {
      isActive: true,
      hasError: false,
      menus: menus1,
      clickIdx: 0,
      fixTopic: false
    }
  }
}
</script>
<style>
  
  /* .active>a {
    color: red
  } */

  #top {
    background-color: whitesmoke;
  }
  .container-fluid {
    margin-top: 2em;
    min-height: 40em;
  }
  .fill_position_only {
    visibility: hidden;
  }

</style>




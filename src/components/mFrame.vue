<template>
 <div id="top" class="container">
    <ul class="nav nav-tabs">
      <li role="presentation" v-bind:class="{active:isActive, 'text-danger': hasError}">
        <router-link to="/h2">
          <a>Home</a></router-link></li>
      <li role="presentation">
        <router-link to="/List">
          <a>DomainList</a></router-link></li>
      <router-link :to="{ name: 'about', params: { id: 123 }}" role="presentation">
        <a>about</a></router-link>
    </ul>
    <div>777</div>
    <router-view/>
    <div>888</div>
 </div> 
</template>

<script>
import MyRouter from '../router/index'

export default {
  MyRouter,
  name: 'mFrame',
  data () {
    return {
      isActive: true,
      hasError: false
    }
  }
}
</script>
<style>

    .active>a {
      color: red
    }

    #top {
      background-color: lightblue;
    }
</style>




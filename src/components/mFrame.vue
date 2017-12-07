<template>
 <div id="top" class="container">
    <ul class="nav nav-tabs">
      <li role="presentation" v-bind:class="{active:isActive, 'text-danger': hasError}"><router-link to="/">
        <a>Home</a></router-link></li>
      <li role="presentation"><router-link to="/origin"><a>Profile</a href="#"></router-link></li>
      <li role="presentation"><a href="#">Messages</a></li>
    </ul>
    <router-view/>
    <span>888</span>
 </div> 
</template>

<script>
export default {
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
    /* @import '../../static/css/bootstrap.css'; */
    .active>a {
      color: red
    }
</style>




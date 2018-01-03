<template>
    <div class="nav">
     <nav class="navbar navbar-default bg-light navbar-expand-lg" role="navigation">
      <div class="container-fluid">
      <div class="navbar-header">
          <a class="navbar-brand" href="#"> Customer </a>
      </div>
      <div>
          <ul class="nav navbar-nav">
              <li><router-link to="/">Homexxxxxxxxxxxxxxx</router-link></li>
              <li><router-link to="/signIn">signIn</router-link></li>
              <li><router-link to="/signUp">signUp</router-link></li>
          </ul>
      </div>
      </div>
     </nav>
    </div>
</template>

<script>

export default {
  name: 'navBar'
}
</script>


<style scoped>

</style>
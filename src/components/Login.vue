<template>
 <div id="login" class="container">

    <form @submit.prevent="doLogin">
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" maxlength="29" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="loginName">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <!-- <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" readonly>
    </div> -->
    <div class="form-check">
        <label class="form-check-label">
        <input type="checkbox" class="form-check-input">
        Check me out
        </label>
    </div>
    <button type="submit" class="btn btn-primary">登录</button>
    </form>
 </div> 
</template>

<script>
import {User} from '../assets/js/model'

export default {
  name: 'loginPage',
  data () {
    return {
      loginName: ''
    }
  },
  methods: {
    doLogin: function () {
      this.$emit('userListener', new User(1, this.loginName))
      console.log(`name:${this.loginName}`)
      window.history.go(-1)
    }
  }
}
</script>

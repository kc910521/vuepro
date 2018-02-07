<template>
 <div id="login" class="container">
   <br/>
    <form @submit.prevent="doLogin">
      <label for="exampleInputEmail1" class="text-light">Email </label><br/><br/>
      <div class="col-lg-6">
        <div class="input-group">
          <input type="email" maxlength="29" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="loginName">
          <span class="input-group-btn">
          <button class="btn btn-primary" type="submit">登录 !</button>
          </span>
        </div>
      </div>
      <br/><br/><br/>
      <small id="emailHelp" class="form-text text-muted" v-on:click="refreshTim">别害怕, 不需要密码.</small>
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
    },
    refreshTim: function () {
      this.$store.commit('refreshTim', new Date() + '===--==')
    }
  }
}
</script>

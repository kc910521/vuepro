// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import store from './vuex/store'
import './assets/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app233',
  store,
  router,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import Vuex from 'vuex'
// 引入 axios
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
 // 定义状态
  state: {
    tim: '-'
  },
  mutations: {
    refreshTim (state, msg) {
      state.tim = msg
    }
  },
  actions: {
    // 封装一个 ajax 方法
    // getTest (context) {
    //   axios({
    //     method: 'get',
    //     url: '/user',
    //     data: context.state.test02
    //   })
    // }
  }
})

export default store

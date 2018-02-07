import Vue from 'vue'
import Vuex from 'vuex'

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
  }
})

export default store

<template>
  <div class="hello">
    <h1 v-on:click="faqMethod">{{ sucker }}</h1>
    <navBar/>
    <router-view/>
    <input v-model="sucker">
    <button>{{msg}}</button>
    <h1 v-if="seen">Nothing before me</h1>
    <div id="app-4">
      <ol>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <span>xxxxxxxxxxxxxxxxxx</span>

  </div>
</template>

<script>
import navBar from '@/components/navBar'

export default {
  name: 'HelloWorld1',
  data () {
    return {
      seen: false,
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ],
      msg: 'Welcome to Your Vue.js App',
      sucker: 'have funnnnn'
    }
  },
  components: {
    navBar
  },
  watch: {
    sucker: function (val) {
      this.msg = this.msg + '-' + val
      this.seen = !this.seen
    }
  },
  methods: {
    faqMethod: function () {
      this.sucker = this.sucker.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item img-wrap active">
        <img class="d-block w-100" src="https://cn.bing.com/az/hprichbg/rb/KelpiesFalkirk_EN-US8885510040_1920x1080.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://tse4-mm.cn.bing.net/th?id=OIP.LgFPp8LpMIf9yR5zTaC7ggHaEv&p=0&o=5&pid=1.1" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://cn.bing.com/az/hprichbg/rb/KelpiesFalkirk_EN-US8885510040_1920x1080.jpg" alt="Third slide">
      </div>
    </div>
  </div>
  <!-- <div class="hello">

    <h1 v-on:click="faqMethod">{{ sucker }}</h1>
    <input v-model="sucker">
  </div> -->
</template>

<script>
export default {
  name: 'HelloWorld333',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sucker: 'have fun'
    }
  },
  methods: {
    // faqMethod: function () {
    //   this.sucker = this.sucker.split('').reverse().join('')
    // }
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


/* from */
.img-wrap {
    /* width: 194px;
    height: 108px; */
    float: left;
    margin-left: 6px;
    background: #e8e8e8;
    border: 1px solid #e8e8e8;
    overflow: hidden;
    cursor: pointer;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
.img-wrap img {
    width: 100%;
    height: 100%;
    border: 0;
    -webkit-transition: all .5s ease-out .1s;
    transition: all .5s ease-out .1s;
}
.img-wrap:hover img {
    -webkit-transform: matrix(1.04,0,0,1.04,0,0);
    -ms-transform: matrix(1.04,0,0,1.04,0,0);
    transform: matrix(1.04,0,0,1.04,0,0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

</style>

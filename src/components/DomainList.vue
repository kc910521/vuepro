<template>
  <div>
    <div class="container">
      <div class="card-deck" v-for="(nList,index) of nameList">
        <kpxCard v-for="itm of nList"  :key="itm.id" :title="itm.name" :header="itm.spDesc" :desc="itm.desc" :to="itm.salePage"></kpxCard>
      </div>
    </div>
    <!-- <pager></pager> -->
  </div>
</template>
<script>

import pager from './pager'
import kpxCard from './kpxCard'
import {SPLIT_DATA_SHOW} from '../assets/js/utils'

export default {
  data () {
    return {
      nameList: [null]
    }
  },
  created () {
    this.getDomsData()
  },
  methods: {
    getDomsData: function () {
      let that = this
      this.$ajax.get('/src/assets/json/domains.json')
        .then(function (response) {
          console.log(response)
          if (response.status === 200) {
            that.nameList = SPLIT_DATA_SHOW(3, response.data)
          } else {
            console.error('error:' + response.status)
          }
        })
        .catch(function (response) {
          console.log(response)
        })
    }
  },
  components: {
    pager,
    kpxCard
  }
}
</script>

<style scoped>
  ul {
    list-style:none;
  }

  .in_a_line {
    list-style:none; /* 去掉ul前面的符号 */
    border: 1px solid transparent;
    width: auto; /* 宽度根据元素内容调整 */
  }

  .in_a_line:hover{
    border: 1px solid rebeccapurple;
  }
  
  .in_a_line>li {
    display: inline-block;
    min-width: 100px;
  }
</style>



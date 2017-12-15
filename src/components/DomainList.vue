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

const nList = [
  {
    id: 1,
    name: 'qiuku.com',
    salePage: 'http://www.qiuku.com',
    price: '未知',
    spDesc: '秋裤 球裤'
  },
  {
    id: 2,
    name: 'changku.com',
    salePage: '',
    spDesc: '长裤',
    desc: '见秋裤水水水水水水水水水水水水水水水水水'
  },
  {
    id: 3,
    name: 'youliliang.com',
    salePage: '',
    spDesc: '优力量'
  },
  {
    id: 4,
    name: 'binsai.com',
    salePage: '',
    spDesc: '宾赛',
    price: '￥8000'
  }
]

export default {
  data () {
    return {
      nameList: SPLIT_DATA_SHOW(3, nList)
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



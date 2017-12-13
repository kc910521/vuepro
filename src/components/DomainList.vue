<template>
  <div>
      <h3>域名列表</h3>
      <div>
        <ul>
          <li v-for="itm in nameList">
            <ul class="in_a_line">
              <li><a>{{ itm.name }}</a></li>
              <li><a>{{ itm.salePage }}</a></li>
              <li><a>{{ itm.price }}</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <pager></pager>
  </div>
</template>
<script>

import pager from './pager'

export default {
  data () {
    return {
      nameList: [
        {
          id: 1,
          name: 'qiuku.com',
          salePage: '',
          price: '未知'
        },
        {
          id: 2,
          name: 'changku.com',
          salePage: '',
          price: '未知'
        }
      ]
    }
  },
  components: {
    pager
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



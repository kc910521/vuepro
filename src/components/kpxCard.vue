<template>
  <div class="card border-primary mb-3" style="max-width: 20rem;" v-on:mouseover="mOver">
    <div class="card-header">{{ header }}</div>
    <div class="card-body text-primary">
      <h4 class="card-title">
        <a v-if="to != null && to !== ''" class="redirectable" target="_blank" :href="to" title="到购买页">{{ title }}</a>
        <a v-else>{{ title }}</a>
      </h4>
      <p class="card-text">{{ desc }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'kpxCard',
  props: ['header', 'title', 'desc', 'to'],
  methods: {
    mOver: function (e) {
      console.log(e)
    }
  }
}
</script>
<style scoped>
  .card {
    min-height: 150px;
  }
  .redirectable {
    cursor: pointer;
  }
</style>



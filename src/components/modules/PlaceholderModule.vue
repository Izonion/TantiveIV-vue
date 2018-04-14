<template>
  <div class="module card-body">
    <h4 v-if="editing">Click the green button below to add some content to your notebook.</h4>
    <h4 v-else>This notebook is empty.</h4>
  </div>
</template>

<script>
  export default {
    props: ['editing']
  }
</script>

<style scoped>
  .module {
    opacity:0.6;
  }
</style>

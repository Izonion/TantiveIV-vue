<template>
  <!--
  <div class="module">
    <iframe width="560" height="315" :src="embedUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
  -->

  
  <div class="module">
    <div v-if="editing">
      <textarea class="text-content" v-model.sync="embedUrl"></textarea>
      <button @click="editing = !editing">Save</button>
    </div>
    <div v-else>
      <iframe width="560" height="315" :src="embedUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <button @click="editing = !editing">Edit</button>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: "VideoModule",
    props: {
      content: {
        type: Object,
        requred: true
      }
    },
    data() {
      return {
      }
    }
  }
</script>

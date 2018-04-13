<template>
  <div class="module">
    <iframe width="560" height="315" :src="embed-url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
</template>

<script>
  export default {
    name: "VideoModule",
    data: {
    	embed-url: "https://www.youtube.com/watch?v=C0DPdy98e4c"
    }
  }

</script>

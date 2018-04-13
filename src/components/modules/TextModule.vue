<template>
  <div class="module">
    <div v-if="editing">
      <textarea class="text-content" v-text="content.text"></textarea>
      <button @click="editing = !editing">Save</button>
    </div>
    <div v-else>
      <p class="text-content" v-text="content.text"></p>
      <button @click="editing = !editing">Edit</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TextModule",
    props: {
      content: {
        type: Object,
        requred: true
      }
    },
    data() {
      return {
        editing: false
      }
    }
  }
</script>

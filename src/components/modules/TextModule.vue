<template>
  <div class="module">
    <div v-if="editing">
      <textarea class="text-content" v-model.sync="content"></textarea>
      <button @click="editing = !editing">Save</button>
    </div>
    <div v-else>
      <p class="text-content" v-text="content"></p>
      <button @click="editing = !editing">Edit</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TextModule",
    data() {
      return {
        editing: false,
        content: "DEFAULT"
      }
    }
  }
</script>

<template>
  <div class="notebook">
    <TextModule />
  </div>
</template>

<script>
  import TextModule from './TextModule.vue'

  export default {
    name: "NoteBook",
    data() {
      return {
        modules: {}
      }
    },
    components: {
      TextModule
    }
  }
</script>

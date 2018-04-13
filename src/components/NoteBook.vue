<template>
  <div class="notebook">
    <component v-for="(m, key) in modules" :is="m">
    </component>
  </div>
</template>

<script>
  import TextModule from './TextModule.vue'
  import VideoModule from './VideoModule.vue'

  export default {
    name: "NoteBook",
    data() {
      return {
        modules: {
          0: TextModule,
          1: TextModule,
          2: VideoModule
        }
      }
    },
    components: {
      TextModule
    }
  }
</script>

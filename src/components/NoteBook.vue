<template>
  <div class="notebook">
    <component v-for="(m, key) in modules"
               :is="wrapper"
               :content="m">
    </component>
  </div>
</template>

<script>
  import ModuleWrapper from './modules/ModuleWrapper.vue'
  import TextModule from './modules/TextModule.vue'
  import VideoModule from './modules/VideoModule.vue'

  export default {
    name: "NoteBook",
    data() {
      return {
        wrapper: ModuleWrapper,
        modules: {
          0: TextModule,
          1: TextModule,
          2: VideoModule
        }
      }
    },
    components: {
      ModuleWrapper
    },
    computed: {
      sortedModules() {

      }
    }
  }
</script>

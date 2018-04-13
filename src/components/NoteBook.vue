<template>
  <div class="notebook">
    <component v-for="module in sortedModules"
               :is="wrapper"
               :content="module.module">
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
        modules: [
          {
            module: TextModule,
            position: 0
          },
          {
            module: TextModule,
            position: 2
          },
          {
            module: VideoModule,
            position: 1
          }
        ]
      }
    },
    components: {
      ModuleWrapper
    },
    computed: {
      sortedModules() {
        function compare(l, r) {
          if (l.position < r.position) {
            return -1;
          } else if (l.position > r.position) {
            return 1;
          }
        }
        return this.modules.sort(compare);
      }
    }
  }
</script>

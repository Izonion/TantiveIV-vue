<template>
  <div class="notebook">
    <div v-for="module in modules">
      <component :key="module.key"
                 :is="module.module"
                 :content="module.content">
      </component>
      <button @click="removeModule(module)">-</button>
    </div>
  </div>
</template>

<script>
  import TextModule from './modules/TextModule.vue'
  import VideoModule from './modules/VideoModule.vue'

  export default {
    name: "NoteBook",
    data() {
      return {
        modules: [
          {
            module: TextModule,
            content: {text: "EIJFOJ"}
          },
          {
            module: TextModule,
            content: {text: "awegjOE"}
          },
          {
            module: VideoModule,
            content: {}
          }
        ]
      }
    },
    components: {
      TextModule,
      VideoModule
    },
    methods: {
      removeModule(module) {
        for (var i = 0; i < this.modules.length; i++) {
          if (this.modules[i] === module) {
            this.modules.splice(i, 1);
            return;
          }
        }
      }
    }
  }
</script>

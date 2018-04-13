<template>
  <div class="notebook container">
    <div class="row row-offset" v-for="module in modules">
      <div class="col-md-10 offset-md-1">
        <div class="card">
          <component :key="module.key"
                     :is="module.module"
                     :content="module.content"
                     @contentUpdated="updateContent(module, $event)">
          </component>
          <div class="card-footer btn-toolbar justify-content-between">
            <button class="btn btn-sm btn-secondary card-text" @click="">Edit</button>
            <button class="btn btn-lg btn-danger card-text" @click="removeModule(module)">-</button>
          </div>
        </div>
      </div>
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
            content: {embedUrl: "https://www.youtube.com/embed/C0DPdy98e4c"}
          }
        ],
        editing: true
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
      },
      updateContent(module, newContent) {
        module.content = newContent;
      }
    }
  }
</script>

<style scoped>
.row-offset {
  margin-top: 20px;
}
</style>

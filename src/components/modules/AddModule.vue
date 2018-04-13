<template>
  <div class="col col-10 justify-content-center">
    <div class="btn-toolbar mb-3 justify-content-center" v-if="expanded" role="toolbar">
      <div class="btn-group mr-2" role="group">
        <button v-for="(moduleType, key) in moduleTypes"
                class="btn btn-info"
                @click="$emit('addModule', moduleType)">{{key}}</button>
      </div>
      <div class="btn-group" role="group">
        <button class="btn btn-danger" @click="expanded = false">-</button>
      </div>
    </div>
    <div class="mb-3" v-else>
      <button class="btn btn-success" @click="expanded = true">+</button>
    </div>
  </div>
</template>

<script>
  import TextModule from './TextModule.vue'
  import VideoModule from './VideoModule.vue'
  import ImageModule from './ImageModule.vue'
  import QuizletModule from './QuizletModule.vue'

  export default {
    name: "AddModule",
    props: {
      expanded: false
    },
    data() {
      return {
        moduleTypes: {
          "Text": TextModule,
          "Video": VideoModule,
          "Image": ImageModule,
          "Quizlet": QuizletModule
        }
      }
    }
  }
</script>

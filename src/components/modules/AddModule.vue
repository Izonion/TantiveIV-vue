<template>
  <div class="col-lg-2">
    <div class="btn-toolbar" v-if="expanded">
      <div class="btn-group mr-2">
        <button v-for="(moduleType, key) in moduleTypes"
                class="btn btn-info"
                @click="$emit('addModule', moduleType)">{{key}}</button>
      </div>
      <div class="btn-group" role="group">
        <button class="btn btn-danger" @click="expanded = false">-</button>
      </div>
    </div>
    <div v-else>
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

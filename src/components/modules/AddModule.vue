<template>
  <div class="col col-10 justify-content-center">
    <div class="btn-toolbar justify-content-center" v-if="expanded" role="toolbar">
      <div class="btn-group mr-2" role="group">
        <button v-for="(moduleType, key) in moduleTypes"
                class="btn btn-info"
                @click="selectModule(moduleType)">{{key}}</button>
      </div>
      <div class="btn-group" role="group">
        <button class="btn btn-danger" @click="expanded = false"><i class="fas fa-minus-circle"></i></button>
      </div>
    </div>
    <div v-else>
      <button class="btn btn-success" style="width:100%" @click="expanded = true"><i class="fas fa-plus-circle"></i></button>
    </div>
  </div>
</template>

<script>
  import TextModule from './TextModule.vue'
  import VideoModule from './VideoModule.vue'
  import ImageModule from './ImageModule.vue'
  import QuizletModule from './QuizletModule.vue'
<<<<<<< HEAD
  import MarkDownModule from './MarkDownModule.vue'
=======
  import LinkModule from './LinkModule.vue'
>>>>>>> 2eae636606b1f89433086045da898aa1ce5c47dd

  export default {
    name: "AddModule",
    data() {
      return {
        expanded: false,
        moduleTypes: {
          "Text": TextModule,
          "Video": VideoModule,
          "Image": ImageModule,
          "Quizlet": QuizletModule,
<<<<<<< HEAD
          "MD": MarkDownModule
=======
          "Link": LinkModule
>>>>>>> 2eae636606b1f89433086045da898aa1ce5c47dd
        }
      }
    },
    methods: {
      selectModule(moduleType) {
        this.$emit('addModule', moduleType);
        this.expanded = false;
      }
    }
  }
</script>

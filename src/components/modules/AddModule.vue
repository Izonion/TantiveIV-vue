<template>
  <div class="col col-10 justify-content-center">
    <div class="btn-toolbar justify-content-center" v-if="expanded" role="toolbar">
      <div class="btn-group mr-2" role="group">
        <button v-for="(moduleType, key) in moduleTypes"
                :key="key"
                class="btn btn-info"
                @click="selectModule(moduleType)">{{key}}</button>
      </div>
      <div class="btn-group" role="group">
        <button class="btn btn-danger" @click="expanded = false"><i class="fas fa-minus-circle"></i></button>
      </div>
    </div>
    <div v-else>
      <button class="btn btn-light" style="width:100%" @click="expanded = true"><i class="fas fa-plus-circle"></i></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddModule",
    data() {
      return {
        expanded: false,
        moduleTypes: {
          "Text": 'TextModule',
          "Video": 'VideoModule',
          "Image": 'ImageModule',
          "Quizlet": 'QuizletModule',
          "Link": 'LinkModule',
          "MD": 'MarkDownModule'
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

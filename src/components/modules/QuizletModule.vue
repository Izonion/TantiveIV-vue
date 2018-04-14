<template>
  <div class="module card-body">
    <div v-if="editing">
      <h5>Quizlet Embed Url:</h5>
      <textarea class="editbox ext-content" id="textModule" v-model="editedContent.quizUrl"></textarea>
      <i><i class="fas fa-question-circle mr-1"></i> This box requires a quizlet link, which you can get from copy/pasting the url.</i>
    </div>
    <div v-else>
      <iframe :src="content.embedQuiz" height="500" width="100%" style="border:0"></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    name: "QuizletModule",
    props: {
      content: {
        type: Object,
        requred: true
      },
      editing: {
        type: Boolean
      }
    },
    data() {
      return {
        editedContent: {}
      }
    },
    methods: {
      save() {
        this.editedContent.embedQuiz = this.embedQuiz;
        this.contentUpdated(this.editedContent);
      },
      edit() {
        this.editedContent = this.content;
      },
      contentUpdated(newContent) {
        this.$emit('contentUpdated', newContent);
      }
    },
    watch: {
      editing(val) {
        if (val) {
          this.editedContent = this.content;
        } else {
          this.contentUpdated(this.editedContent);
        }
      }
    },
    computed: {
      embedQuiz() {
        var quizUrl = this.editedContent.quizUrl;
        if (quizUrl.indexOf("quizlet.com/") > -1){
          return "https://quizlet.com/" + quizUrl.substring(quizUrl.indexOf("m/") + 2, quizUrl.indexOf("m/") + 11) + "/learn/embed";
        } else {
          return quizUrl;
        }
      }
    }
  }
</script>

<style scoped>
  p {
    white-space: pre-wrap;
  }
  .module {
    text-align: left;
  }
</style>

<template>
  <div class="module card-body">
    <div v-if="editing">
      <textarea class="editbox text-content" id="textModule" v-model.sync="editedContent.text"></textarea>
    </div>
    <div v-else>
      <vue-markdown>{{content.text}}</vue-markdown>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  export default {
    name: "MarkDownModule",
    props: {
      content: {
        type: Object,
        requred: true
      },
      editing: {
        type: Boolean
      }
    },
    components: {
      VueMarkdown,
    },
    data() {
      return {
        editedContent: {}
      }
    },
    methods: {
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

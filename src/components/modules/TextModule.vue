<template>
  <div class="module card-body">
    <div v-if="editing">
      <textarea class="text-content" id="textModule" v-model.sync="editedContent.text"></textarea>
    </div>
    <div v-else>

      <p class="text-content" v-text="content.text"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TextModule",
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

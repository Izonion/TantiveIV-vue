<template>
  <div class="module card-body">
    <div v-if="editing">
      <textarea class="editbox text-content" id="textModule" v-model="editedContent.text"></textarea>
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

<style>
  pre, code {
    background-color: #e3e9ef;
    padding: 2px;
    padding-left: 4px;
    padding-right: 4px;
    margin-left: 1px;
    margin-right: 1px;
    border: 1px solid #d7dee5;
    border-radius: 2px;
  }
  code {
    border: none;
  }
</style>

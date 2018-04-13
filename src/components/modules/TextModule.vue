<template>
  <div class="module">
    <div v-if="editing">
      <textarea class="text-content" v-model.sync="editedContent.text"></textarea>
      <button @click="save">Save</button>
    </div>
    <div v-else>
      <p class="text-content" v-text="content.text"></p>
      <button @click="edit">Edit</button>
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
      }
    },
    data() {
      return {
        editing: false,
        editedContent: {}
      }
    },
    methods: {
      edit() {
        this.editing = true;
        this.editedContent = this.content;
      },
      save() {
        this.editing = false;
        this.contentUpdated(this.editedContent);
      },
      contentUpdated(newContent) {
        this.$emit('contentUpdated', newContent);
      }
    }
  }
</script>

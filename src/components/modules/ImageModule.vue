<template>
  <div class="module">
    <div v-if="editing">
      <textarea class="text-content" v-model.sync="editedContent.imageUrl"></textarea>
      <button @click="save">Save</button>
    </div>
    <div v-else>
      <img :src="content.imageUrl" width="560"></img>
      <button @click="edit">Edit</button>
    </div>
  </div>

</template>

<script>
  export default {
    name: "VideoModule",
    props: {
      content: {
        type: Object,
        requred: true
      }
    },
    data() {
      return {
        editedContent: {},
        editing: false
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

<template>
  <!--
  <div class="module">
    <iframe width="560" height="315" :src="embedUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
  -->


  <div class="module">
    <div v-if="editing">
      <textarea class="text-content" v-model.sync="editedContent.embedUrl"></textarea>
      <button @click="save">Save</button>
    </div>
    <div v-else>
      <iframe width="560" height="315" :src="content.embedUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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

<template>
  <div class="module card-body">
    <div v-if="editing" style="text-align: left">
      <h5>Image Url:</h5>
      <textarea class="editbox text-content" v-model="editedContent.imageUrl"></textarea>
      <i><i class="fas fa-question-circle mr-1"></i>This box requires a full image url, such as if you right clicked on an image and selected 'copy image url'</i>
    </div>
    <div v-else>
      <img :src="content.imageUrl" width="560" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "ImageModule",
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

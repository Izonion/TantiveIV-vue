<template>
  <div class="module">
    <div v-if="editing">
      <textarea class="text-content" v-model.sync="editedContent.userUrl"></textarea>
    </div>
    <div class="aspect-ratio" v-else>
      <iframe width="100%" :src="content.embedUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
      },
      editing: {
        type: Boolean
      }
    },
    data() {
      return {
        editedContent: {},
      }
    },
    methods: {
      save() {
        this.editedContent.embedUrl = this.embedUrl;
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
          this.edit();
        } else {
          this.save();
        }
      }
    },
    computed: {
      embedUrl() {
        var userUrl = this.editedContent.userUrl;
        if (userUrl.indexOf("youtube.com") == -1) {
          return;
        } else if (userUrl.indexOf("watch?v=") > -1){
          var output = "https://youtube.com/embed/" + userUrl.substring(userUrl.indexOf("v=") + 2, userUrl.indexOf("v=") + 13);
          console.log(output);
          return output;
        } else {
          return userUrl;
        }
      }
    }
  }
</script>

<style scoped>
  .aspect-ratio {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 51%;
  }
  .aspect-ratio iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0; top: 0;
  }
</style>

<template>
  <div class="module card-body">
    <div v-if="editing">
      <textarea class="text-content" id="linkModule" v-model.sync="editedContent.url"></textarea>
    </div>
    <div v-else>
      <a :href="content.url" target="_blank" class="btn btn-info">Link</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LinkModule",
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

  #link {
    /*background-color: black;*/
  }

  /*a {
    color: white;
    display: inline-block;
    height: 100%;
    width: 100%;
  }*/

  a {
    width:100%;
    height:40px;
    color:#fff;
    text-align:
    center;
    display: block;
    -webkit-border-radius:3px; 
    -moz-border-radius:3px; 
    border-radius:3px;
  }

  a:hover {
    text-decoration: none;
    color: #cccccc;
  }
</style>

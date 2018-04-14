<template>
  <div class="module card-body">
    <div v-if="editing">
      <h5>Link Label:</h5> <textarea class="text-content" id="linkUrl" v-model.sync="editedContent.url" placeholder="Google" style="width:100%"></textarea>
      <h5>Link Url:</h5><textarea class="text-content" id="linkLabel" v-model.sync="editedContent.label" placeholder="https://www.google.com" style="width:100%"></textarea> 
      <i><i class="fas fa-question-circle mr-1"></i> Fill in the top box how you want the link to look on your page, and put the url in the second box. Make sure to include 'www'!</i>

    </div>
    <div v-else>
      <a :href="content.url" target="_blank" class="btn btn-info">{{content.label}}</a>
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

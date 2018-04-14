<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-1"></div>
      <div class="col-10 mt-5">
        <h1 style="color: white;">My Notebook Collection</h1>
      </div>
      <div class="col-md-1 mt-5" style="height: 3em">
        <button v-if="!editing" class="btn btn-secondary" @click="editing = true">Edit Page</button>
        <button v-else class="btn btn-success" @click="editing = false">Save Page</button>
      </div>
    </div>
    <div class="row justify-content-center">
      <NoteBookListItem v-for="noteBook in noteBookMetadatas"
                        :metadata="noteBook"
                        :editing="editing"
                        @noteBookChoose="$emit('noteBookChoose', $event)" />
      <div v-if="editing" class="card m-5">
        <button class="btn btn-success" @click="$emit('createNoteBook')">
          <h1 class="card-body">
            <i class="fas fa-plus-circle"></i>
          </h1>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import NoteBookListItem from "./NoteBookListItem"

  export default {
    name: 'NoteBookList',
    components: {
      NoteBookListItem
    },
    props: ['noteBookMetadatas'],
    data(){
      return {
        editing: false
      }
    },
    methods: {
      removeListItem(listItem) {
        //for (var i = 0; i < this.noteBook.modules.length; i++) {
          //if (this.noteBook.modules[i] === module) {
            //this.noteBook.modules.splice(i, 1);
            //return;
          //}
        //}
      }
    }
  }
</script>

<style scoped>
  .card {
    background-color: rgba(0, 0, 0, 0);
  }
  button {
    height: 100%;
  }
</style>

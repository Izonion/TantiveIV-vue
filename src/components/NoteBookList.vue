<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-1"></div>
      <div class="col-10 mt-5">
        <h1 style="color: #DFF3E4;">My Notebook Collection</h1>
      </div>
      <div class="col-md-1 mt-5" style="height: 3em">
        <button v-if="!editing" class="btn btn-dark" style="" @click="editing = true">Edit List</button>
        <button v-else class="btn btn-info" @click="editing = false">Save List</button>
      </div>
    </div>
    <div class="row justify-content-center">
      <NoteBookListItem v-for="noteBook in noteBookMetadatas"
                        :key="noteBook.key"
                        :metadata="noteBook"
                        :editing="editing"
                        @noteBookChoose="$emit('noteBookChoose', $event)"
                        @deleteNoteBook="deleteNoteBook($event)" />
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
      deleteNoteBook(id) {
        this.$emit('deleteNoteBook', id);
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

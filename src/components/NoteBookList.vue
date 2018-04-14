<template>
  <div class="container">
    <div class="row justify-content-center">
      <NoteBookListItem v-for="noteBook in noteBookMetadatas"
                        :metadata="noteBook"
                        @noteBookChoose="$emit('noteBookChoose', $event)" />
      <div class="card m-5">
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
    props: ['noteBookMetadatas']
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

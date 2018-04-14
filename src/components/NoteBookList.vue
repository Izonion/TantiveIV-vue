<template>
  <div class="container">
    <div class="row justify-content-center">
      <NoteBookListItem v-for="noteBook in noteBookMetadatas"
                        :metadata="noteBook"
                        @noteBookChoose="$emit('noteBookChoose', $event)" />
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
</style>

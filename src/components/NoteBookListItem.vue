<template>
  <div class="card m-5">
    <div>
      <button class="btn btn-info notebook" @click="$emit('noteBookChoose', metadata.uuid)">
        <div class="card-body">
          <h1 class="card-title">
            <i class="fas fa-file-alt"></i><i class="fas fa-pencil-alt ml-2"></i>
          </h1>
          <h5 class="card-title">
            {{metadata.title}}
          </h5>
          <p class="card-text"></p>
        </div>
      </button>
    </div>
    <button v-if="editing" class="btn btn-danger">Delete</button>
  </div>
</template>

<script>
  export default {
    name: 'NoteBookListItem',
    props: ['metadata', 'editing']
  }
</script>

<style scoped>
  .card {
    background-color: rgba(0, 0, 0, 0);
  }
  .notebook {
    background-color: #47ad92;
    color: #2c3e50;
  }
  .notebook:hover {
    background-color: #2493a2;
    color: #2c3e50;
  }
  .notebook:active {
    background-color: #2c3259;
    color: #2c3e50;
  }
</style>

<template>
  <div class="card m-5">
    <div>
      <button v-if="!editing" class="btn btn-dark notebook" @click="$emit('noteBookChoose', metadata.uuid)">
        <div class="card-body">
          <h1 class="card-title">
            <i class="fas fa-file-alt"></i><i class="fas fa-pencil-alt ml-2"></i>
          </h1>
          <h5 v-if="!editing" class="card-title">
            {{metadata.title}}
          </h5>
          <textarea v-else class="editbox text-content" id="textModule" v-model="metadata.title"></textarea>
          <p class="card-text"></p>
        </div>
      </button>
      <button v-else class="btn btn-info disabled-notebook disabled">
        <div class="card-body">
          <h1 class="card-title">
            <i class="fas fa-file-alt"></i><i class="fas fa-pencil-alt ml-2"></i>
          </h1>
          <h5 v-if="!editing" class="card-title">
            {{metadata.title}}
          </h5>
          <textarea v-else class="editbox text-content" id="textModule" v-model="metadata.title"></textarea>
          <p class="card-text"></p>
        </div>
      </button>
    </div>
    <button v-if="editing" class="btn btn-danger" @click="$emit('deleteNoteBook', metadata.uuid)">Delete</button>
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
    background-color: #7180B9;
    color: #2E1760;
  }
  .notebook:hover {
    background-color: #8A97C5;
    color: #2c3e50;
  }
  .btn-info {
    background-color: #5D6998;
  }

  .notebook:active {
    background-color: #5D6998;
    color: #2c3e50;
  }
</style>

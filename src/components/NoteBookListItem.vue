<template>
  <div class="card m-5">
    <button class="btn btn-info" @click="$emit('noteBookChoose', metadata.uuid)">
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
</template>

<script>
  export default {
    name: 'NoteBookListItem',
    props: ['metadata'],
    created() {
      console.log("CONNNN");
      console.log(this.metadata);
    }
  }
</script>

<style scoped>
  .card {
    background-color: rgba(0, 0, 0, 0);
  }
  button {
    background-color: #47ad92;
    color: #2c3e50;
  }
  button:hover {
    background-color: #2493a2;
    color: #2c3e50;
  }
  button:active {
    background-color: #2c3259;
    color: #2c3e50;
  }
</style>

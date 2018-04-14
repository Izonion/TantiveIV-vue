<template>
  <!--<nav class="navbar navbar-expand-lg navbar-light bg-light rounded">-->
  <nav class="navbar navbar-expand-lg navbar-light rounded">
    <a class="navbar-brand"
       href="#"
       @click="$emit('goHome')"><i class="fas fa-book"></i> Self Study</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample09">
      <ul class="navbar-nav mr-auto">
      </ul>
      <form class="form-inline my-2 my-md-0">
        <input class="form-control" type="text" placeholder="Search" aria-label="Search">
      </form>
      <div class="account-nav" style="padding-left: 20px">
        <button class="btn btn-primary"
                @click="signIn">
          Sign In
        </button>
      </div>
    </div>
  </nav>
</template>


<script>
  export default {
    name: "Header",
    methods: {
      signIn() {
        this.$emit("signInEvent");
      }
    }
  }
</script>

<style scoped>
  .navbar-light{
    background-color: #DCB13C;
  }

  .navbar-brand{
    color: #02577a;
  }

  .navbar-brand:hover {
    color: #404040;
  }
</style>

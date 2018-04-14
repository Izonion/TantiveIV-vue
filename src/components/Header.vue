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
      <div class="btn-group" v-if="messageHandler.user">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{messageHandler.user.username}}
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <button class="dropdown-item" type="button">Action</button>
          <button class="dropdown-item" type="button">Another action</button>
          <button class="dropdown-item" type="button">Something else here</button>
        </div>
      </div>
      <div class="account-nav" style="padding-left: 20px" v-else>
        <button class="btn btn-primary"
                @click="signIn">
          Sign In
        </button>
        <button class="btn btn-primary"
                @click="signUp">
          Sign Up
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
      },
      signUp() {
        this.$emit("signUpEvent");
      }
    },
    props: ['messageHandler']
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

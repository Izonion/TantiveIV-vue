<template>
  <!--<nav class="navbar navbar-expand-lg navbar-light bg-light rounded">-->
  <nav class="navbar navbar-expand-lg navbar-light rounded">
    <a class="navbar-brand"
       href="#"
       @click="$emit('goHome')"><i class="fas fa-book"></i> Self Study</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mr-auto">
      </ul>

      <div v-if="loggedIn" class="account-nav" style="padding-left: 20px">
        <button class="btn btn-secondary ml-2"
                @click="logOut"> Sign Out
        </button>
      </div>
      <div v-else class="account-nav" style="padding-left: 20px">
        <button class="btn btn-info"
                  @click="signIn">
          Sign In
        </button>
        <button class="btn btn-info ml-2"
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
      },
      logOut() {
        this.$emit("logOutEvent");
      }
    },
    props: ['messageHandler'],
    computed: {
      loggedIn() {
        return this.messageHandler.loggedIn;
      }
    }
  }
</script>

<style scoped>
  .navbar-light{
    background-color: #2E1760;
  }

  .navbar-brand{
    color: #DFF3E4;
  }

  .navbar-brand:hover {
    color: white;
  }

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
    color:white;
    left:0;
    text-align: left;
    display: none;
    position: absolute;
    background-color: #636363;
    padding: 5px 8px;
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>

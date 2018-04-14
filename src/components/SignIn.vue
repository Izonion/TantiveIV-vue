<template>
  <div class="row justify-content-center">
    <div id="container" class="card-sm-6">
      <div class="card-body">
      <form class="form-signin">
        <div style="font-size:3em; color:#02577a">
          <i class="fas fa-book"></i>
        </div>
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
        <label for="inputUsername" class="sr-only">Username</label>
        <input type="username" id="inputUsername" class="form-control" placeholder="Username" required autofocus v-model.sync="username">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model.sync="password">
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" v-model="rememberMe"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" @click="submit">Sign In</button>
        <p class="mt-3">Don't have an account?</p>
        <button class="btn btn-sm btn-secondary" @click="$emit('signUpEvent')" type="button">Sign Up</button>
        <p class="mt-3 mb-1 text-muted">&copy; 2018</p>
      </form>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SignIn",
    props: ['webSocket'],
    methods: {
      submit() {
        this.webSocket.send(JSON.stringify({type:"LOGIN", payload:{username:this.username, password:this.password}}));
      }
    },
    data() {
      return {
        username: "",
        password: "",
        rememberMe: false
      }
    }
  }
</script>

<style scoped>
  body {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  #container{
    background-color: white;
    margin: 2em;
    border-radius: 10px;
  }
  .row {
    width: 100%;
  }

</style>

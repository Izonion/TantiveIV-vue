<template>
  <div id="app">
    <Header @goHome="switchToHome"
            @signInEvent="switchToSignIn"
            @signUpEvent="switchToSignUp"/>
    <component :is="bodyView"
               :webSocket="webSocket"
               @click="switchToSignIn"></component>
  </div>
</template>

<script src="/node_modules/vue-cookie/build/vue-cookie.js'"></script>

<script>
import Header from './components/Header.vue'
import NoteBook from './components/NoteBook.vue'
import SignIn from './components/SignIn.vue'
<<<<<<< HEAD
import messageHandlerClass from './assets/js/messages'
=======
import messageHandler from './assets/js/messages'
import SignUp from './components/SignUp.vue'
>>>>>>> 1635f0a5b1fb7a744cd7004081131e016869326e

export default {
  name: 'app',
  components: {
    Header,
    NoteBook,
    SignIn,
    SignUp
  },
  data() {
    return {
      bodyView: NoteBook,
      webSocket: null
    }
  },
  methods: {
    switchToSignIn() {
      this.bodyView = SignIn;
      //this.webSocket.send(JSON.stringify({type:"LOGIN", payload:{username:"test", password:"test"}}));
    },
    switchToSignUp() {
      this.bodyView = SignUp;
    },
    switchToHome() {
      this.bodyView = NoteBook;
    }
  },
  created() {
    try {
      var webSocket = new WebSocket("ws://study.test:8001/ws");
      webSocket.onopen = (event) => {
        let messageHandler = new messageHandlerClass()
        messageHandler.setup(webSocket,this.$cookie);
        webSocket.onmessage = messageHandler.handleMessage;
        messageHandler.onOpen();
        console.log("websocket has opened!!");};
    } catch (err) {
      console.log("Could not connect to server.");
      console.log(err);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

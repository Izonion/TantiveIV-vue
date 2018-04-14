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

<script>
import Header from './components/Header.vue'
import NoteBook from './components/NoteBook.vue'
import SignIn from './components/SignIn.vue'
import messageHandler from './assets/js/messages'
import SignUp from './components/SignUp.vue'

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
      this.webSocket = new WebSocket("ws://study.test:8001/ws");
      this.webSocket.onopen = (event) => {this.webSocket.onmessage = messageHandler;console.log("websocket has opened!!");};
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

<template>
  <div id="app">
    <Header @goHome="switchToHome"
            @signInEvent="switchToSignIn"/>
    <component :is="bodyView"
               @click="switchToSignIn"></component>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import NoteBook from './components/NoteBook.vue'
import SignIn from './components/SignIn.vue'
import messageHandler from './assets/js/messages'

export default {
  name: 'app',
  components: {
    Header,
    NoteBook,
    SignIn
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
    switchToHome() {
      this.bodyView = NoteBook;
    }
  },
  created() {
    try {
<<<<<<< HEAD
      var webSocket = new WebSocket("ws://study.test:8001/ws");
      webSocket.onopen = (event) => {webSocket.onmessage = messageHandler;console.log("websocket has opened!!");};
=======
      this.webSocket = new WebSocket("ws://study.test:8001/ws");
      webSocket.onopen = (event) => {
        console.log("Web Socket Open");
        //this.webSocket.send(JSON.stringify({type:"REGISTER", payload:{username:"test", password:"test", email:"test@test.com"}}));
      };
>>>>>>> 040f467823527d39144306ff40bd1dcdbc90d899
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

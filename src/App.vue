<template>
  <div id="app">
    <Header :messageHandler="messageHandler"
            @goHome="switchToHome"
            @signInEvent="switchToSignIn"
            @signUpEvent="switchToSignUp"/>
    <div class="body-comp">
      <SignIn v-if="bodyView == 'SignIn'"
              :webSocket="webSocket"
              @click="switchToSignIn" />
      <SignOut v-else-if="bodyView == 'SignOut'"
               :webSocket="webSocket" />
      <NoteBookList v-else-if="bodyView == 'NoteBookList'"
                    :noteBookMetadatas="noteBooks.map(function(noteBook) {return noteBook.metadata})"
                    @noteBookChoose="switchToNoteBook($event)" />
      <NoteBook v-else-if="bodyView == 'NoteBook'"
                :inNoteBook="noteBookFromID(selectedNoteBook)" />
    </div>
    <footer>
      <div class="py-3 text-center">
          <i class="fas fa-copyright"></i> 2018
      </div>
    </footer>
  </div>
</template>

<script src="/node_modules/vue-cookie/build/vue-cookie.js'"></script>

<script>
  import Header from './components/Header.vue'
  import NoteBookList from './components/NoteBookList.vue'
  import NoteBook from './components/NoteBook.vue'
  import SignIn from './components/SignIn.vue'
  import messageHandlerClass from './assets/js/messages'
  import SignUp from './components/SignUp.vue'
  import ImageModule from "./components/modules/ImageModule"
  import LinkModule from "./components/modules/LinkModule"
  import QuizletModule from "./components/modules/QuizletModule"
  import TextModule from "./components/modules/TextModule"
  import VideoModule from "./components/modules/VideoModule"

  export default {
    name: 'app',
    components: {
      Header,
      NoteBookList,
      NoteBook,
      SignIn,
      SignUp
    },
    data() {
      return {
        bodyView: 'NoteBookList',
        webSocket: null,
        messageHandler: new messageHandlerClass(),
        selectedNoteBook: 0,
        noteBooks: [
            {
              metadata: {
                title: "MyNOTEBOOK",
                uuid: 12345
              },
              modules: [
                {
                  module: TextModule,
                  editing: false,
                  content: {text: "EIJFOJ"}
                },
                {
                  module: TextModule,
                  editing: false,
                  content: {text: "awegjOE"}
                },
                {
                  module: VideoModule,
                  editing: false,
                  content: {embedUrl: "https://www.youtube.com/embed/C0DPdy98e4c"}
                },
                {
                  module: ImageModule,
                  editing: false,
                  content: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Monnaie_de_Bactriane%2C_Eucratide_I%2C_2_faces.jpg"}
                },
                {
                  module: QuizletModule,
                  editing: false,
                  content: {quizUrl: "https://quizlet.com/286184917/match/embed"}
                },
                {
                  module: LinkModule,
                  editing: false,
                  content: {url: "https://www.google.com"}
                }
              ]
            }
          ]
      }
    },
    computed: {
      user() {
        return this.messageHandler.user;
      }
    },
    methods: {
      switchToSignIn() {
        this.bodyView = 'SignIn';
      },
      switchToSignUp() {
        this.bodyView = 'SignUp';
      },
      switchToHome() {
        this.bodyView = 'NoteBookList';
      },
      switchToNoteBook(noteBookID) {
        console.log(noteBookID);
        this.selectedNoteBook = noteBookID;
        this.bodyView = 'NoteBook';
      },
      noteBookFromID(id) {
        console.log(id);
        for (var i = 0; i < this.noteBooks.length; i++) {
          if (this.noteBooks[i].metadata.uuid == id) {
            return this.noteBooks[i];
          }
        }
      }
    },
    created() {
      try {
        this.webSocket = new WebSocket("ws://study.test:8001/ws");
        this.webSocket.onopen = (event) => {
          this.messageHandler.setup(this.webSocket,this.$cookie);
          this.webSocket.onmessage = this.messageHandler.handleMessage;
          this.messageHandler.onOpen();
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
    display: flex;
    flex-direction: column;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .body-comp {
    flex-grow: 1;
  }

  footer {
    background-color: #DCB13C;
  }
</style>

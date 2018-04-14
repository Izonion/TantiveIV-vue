<template>
  <div id="app">
    <Header :messageHandler="messageHandler"
            @goHome="switchToHome"
            @signInEvent="switchToSignIn"
            @signUpEvent="switchToSignUp"
            @logOutEvent="logOut" />
    <div class="body-comp">
      <SignIn v-if="bodyView == 'SignIn'"
              :webSocket="webSocket"
              @click="switchToSignIn"
              @signUpEvent="switchToSignUp"
              @signInEvent="switchToHome" />
      <SignUp v-else-if="bodyView == 'SignUp'"
               :webSocket="webSocket"
               @signUpEvent="switchToHome" />
      <NoteBookList v-else-if="bodyView == 'NoteBookList'"
                    :noteBookMetadatas="noteBooks.map(function(noteBook) {return noteBook.metadata})"
                    @noteBookChoose="switchToNoteBook($event)"
                    @createNoteBook="createNoteBook"
                    @deleteNoteBook="removeByID" />
      <NoteBook v-else-if="bodyView == 'NoteBook'"
                :inNoteBook="noteBookFromID(selectedNoteBook)"
                @goBackEvent="switchToHome()"
                @update="updateNoteBook($event)" />
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
        noteBooks: []
      }
    },
    computed: {
      user() {
        return this.messageHandler.user;
      }
    },
    methods: {
      logOut(){
        this.webSocket.send(JSON.stringify({type:"LOGOUT"}));
        this.switchToSignIn();
      },
      switchToSignIn() {
        this.bodyView = 'SignIn';
      },
      switchToSignUp() {
        this.bodyView = 'SignUp';
      },
      switchToHomeUnconditional() {
        this.bodyView = 'NoteBookList';
        if (this.selectedNoteBook != 0) {
          console.log("HI");
          console.log(this.noteBookFromID(this.selectedNoteBook));
          this.saveToServer(this.noteBookFromID(this.selectedNoteBook));
        }
        this.selectedNoteBook = 0;
        console.log(this.messageHandler.user);
      },
      switchToHome() {
        if (!this.messageHandler.loggedIn) {
          this.bodyView = 'SignIn';
        } else {
          this.switchToHomeUnconditional();
        }
      },
      switchToNoteBook(noteBookID) {
        console.log("STNB");
        console.log(noteBookID);
        this.selectedNoteBook = noteBookID;
        this.bodyView = 'NoteBook';
      },
      noteBookFromID(id) {
        for (var i = 0; i < this.noteBooks.length; i++) {
          if (this.noteBooks[i]._id === id) {
            return this.noteBooks[i];
          }
        }
      },
      removeByID(id) {
        console.log(id);
        for (var i = 0; i < this.noteBooks.length; i++) {
          if (this.noteBooks[i]._id == id) {
            this.webSocket.send(JSON.stringify({type:"DELETE_NOTEBOOK", payload:{_id: id}}));
            return this.noteBooks.splice(i, 1);
          }
        }
      },
      saveToServer(noteBook) {
        console.log("SAVE");
        console.log(noteBook);
        this.webSocket.send(JSON.stringify({type:"SET_NOTEBOOK", payload:{notebook: noteBook}}));
      },
      createNoteBook() {
        this.webSocket.send(JSON.stringify({type:"CREATE_NOTEBOOK"}));
      },
      loadNoteBook(notebook) {
        var matched = this.noteBookFromID(notebook._id);
        if (matched) {
          this.removeByID(notebook._id);
        }
        this.$set(notebook.metadata, 'uuid', notebook._id);
        this.noteBooks.push(notebook);
      },
      loadNoteBooks(notebooks) {
        this.$set(this, 'noteBooks', notebooks);
        for (var i = 0; i < this.noteBooks.length; i++) {
          this.$set(this.noteBooks[i].metadata, 'uuid', this.noteBooks[i]._id);
        }
      },
      updateNoteBook(noteBook) {
        for (var i = 0; i < this.noteBooks.length; i++) {
          if (this.noteBooks[i]._id === noteBook._id) {
            this.noteBooks.splice(i, 1, noteBook);
            return;
          }
        }
      }
    },
    created() {
      try {
        this.webSocket = new WebSocket("ws://study.test:8001/ws");
        this.webSocket.onopen = (event) => {
          this.messageHandler.setup(this.webSocket,this.$cookie, this);
          this.webSocket.onmessage = this.messageHandler.handleMessage;
          this.messageHandler.onOpen();
          setTimeout(()=>{this.webSocket.send(JSON.stringify({type:"GET_NOTEBOOKS"}))}, 100);
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
    color: #DFF3E4;
  }

  .body-comp {
    flex-grow: 1;
  }

  footer {
    background-color: #2E1760;
  }
</style>

<template>
  <div id="app">
    <Header />
    <component is="bodyView"></component>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import NoteBook from './components/NoteBook.vue'
import SignIn from './components/SignIn.vue'

export default {
  name: 'app',
  components: {
    Header,
    NoteBook,
    SignIn
  },
  data() {
    return {
      bodyView: NoteBook
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
  margin-top: 60px;
}
</style>

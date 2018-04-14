<template>
  <div class="notebook container mb-4">
    <div class="row mt-3">
      <div class="col-md-1">
          <button class="btn btn-info" style="border-radius:50px" @click="goBack"><i class="fas fa-chevron-circle-left"></i> Back</button>
      </div>
      <div class="col-md-10" style="color: white">
        <h1>{{this.noteBook.metadata.title}}</h1>
      </div>
      <div class="col-md-1">
        <button v-if="!editing" class="btn btn-secondary" @click="editing = true">Edit Page</button>
        <button v-else class="btn btn-success" @click="editing = false">Save Page</button>
      </div>
    </div>
    <div v-if="noteBook.modules.length !== 0">
      <div v-for="module in noteBook.modules"
           :key="module.key">
        <div v-if="editing" class="row row-offset justify-content-center">
          <AddModule class="col-md-10"
                     @addModule="addModule($event, noteBook.modules.indexOf(module))" />
        </div>
        <div class="row row-offset justify-content-center">
          <div class="col-md-10">
            <div class="card-group">
              <div class="card">
                <component :is="module.module"
                           :content="module.content"
                           :editing="module.editing"
                           @contentUpdated="updateContent(module, $event)"></component>
             </div>
              <div v-if="editing" class="card btn-toolbar col-1" style="padding:0">
                <button class="btn btn-lg btn-danger card-text" @click="removeModule(module)"><i class="fas fa-trash-alt"></i></button>
                <span v-if="module.editing !== undefined">
                  <button class="btn btn-lg btn-success card-text" style="width:100%;"
                          @click="module.editing = false"
                          v-if="module.editing">Save</button>
                  <button class="btn btn-lg btn-secondary card-text" style="width:100%;"
                          @click="module.editing = true"
                          v-else><i class="fas fa-edit"></i></button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="row row-offset justify-content-center">
        <div class="col-md-10">
          <PlaceholderModule class="card"
              :editing ="editing" />
        </div>
      </div>
    </div>
    <div v-if="editing" class="row row-offset justify-content-center">
      <AddModule class="col-md-10"
                 @addModule="addModule($event, noteBook.modules.length)" />
    </div>
  </div>
</template>

<script>
  import TextModule from './modules/TextModule.vue'
  import VideoModule from './modules/VideoModule.vue'
  import ImageModule from './modules/ImageModule.vue'
  import QuizletModule from './modules/QuizletModule.vue'
  import AddModule from './modules/AddModule.vue'
  import LinkModule from './modules/LinkModule.vue'
  import PlaceholderModule from './modules/PlaceholderModule.vue'
  import MarkDownModule from './modules/MarkDownModule.vue'

  export default {
    name: "NoteBook",
    props: ['inNoteBook'],
    created() {
      this.$set(this, 'noteBook', this.inNoteBook);
      console.log(this.noteBook);
    },
    updated() {
      this.$emit('update', this.noteBook);
    },
    data() {
      return {
        noteBook: {modules: []},
        editing: true,
        moduleTypes: {
          "TextModule": TextModule,
          "VideoModule": VideoModule,
          "ImageModule": ImageModule,
          "QuizletModule": QuizletModule,
          "LinkModule": LinkModule,
          "MarkDownModule": MarkDownModule
        }
      }
    },
    components: {
      AddModule,
      PlaceholderModule,
      TextModule,
      VideoModule,
      ImageModule,
      QuizletModule,
      LinkModule,
      MarkDownModule
    },
    methods: {
      removeModule(module) {
        for (var i = 0; i < this.noteBook.modules.length; i++) {
          if (this.noteBook.modules[i] === module) {
            this.noteBook.modules.splice(i, 1);
            return;
          }
        }
      },
      updateContent(module, newContent) {
        module.content = newContent;
      },
      addModule(newModule, index) {
        this.noteBook.modules.splice(index, 0, {});
        this.$set(this.noteBook.modules[index], 'module', newModule);
        this.$set(this.noteBook.modules[index], 'editing', true);
        this.$set(this.noteBook.modules[index], 'content', {});
      },
      goBack() {
        this.$emit("goBackEvent", this.noteBook);
      }
    }
  }
</script>

<style scoped>
.row-offset {
  margin-top: 20px;
}
</style>

<style>
  .editbox {
    width: 100%;
    resize: vertical;
  }
</style>

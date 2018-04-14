<template>
  <div class="notebook container mb-4">
    <div v-for="module in modules">
      <div class="row row-offset justify-content-center">
        <AddModule class="col-md-10"
                   @addModule="addModule($event, modules.indexOf(module))" />
      </div>
      <div class="row row-offset justify-content-center">
        <div class="col-md-10">
          <div class="card-group row">
            <div class="card">
              <component :is="module.module"
                         :content="module.content"
                         :editing="module.editing"
                         @contentUpdated="updateContent(module, $event)"></component>
           </div>
            <div class="card btn-toolbar col-1">
              <button class="btn btn-lg btn-danger card-text" @click="removeModule(module)"><i class="fas fa-trash-alt"></i></button>
              <span v-if="module.editing !== undefined">
                <button class="btn btn-lg btn-success card-text" style="width:100%;"
                        @click="module.editing = false"
                        v-if="module.editing">Save</button>
                <button class="btn btn-lg btn-secondary card-text" style="width:100%;"
                        @click="module.editing = true"
                        v-else>Edit</button>
                <button class="btn btn-lg btn-secondary card-text"
                        @click="moveModule(module, 0)"
                        >Move to 0</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-offset justify-content-center">
      <AddModule class="col-md-10"
                 @addModule="addModule($event, modules.length)" />
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

  export default {
    name: "NoteBook",
    data() {
      return {
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
        ],
        editing: true
      }
    },
    components: {
      AddModule
    },
    methods: {
      removeModule(module) {
        for (var i = 0; i < this.modules.length; i++) {
          if (this.modules[i] === module) {
            this.modules.splice(i, 1);
            return;
          }
        }
      },
      updateContent(module, newContent) {
        module.content = newContent;
      },
      addModule(newModule, index) {
        this.modules.splice(index, 0, {
          module: newModule,
          editing: false,
          content: {}
        });
      },
      moveModule(module, index){
        while (index < 0) {
            index += this.modules.length;
        }
        if (index >= this.modules.length) {
            var k = index - arr.length;
            while ((k--) + 1) {
                this.modules.push(undefined);
            }
        }
         this.modules.splice(index, 0, this.modules.splice(this.modules.indexOf(module), 1)[0]);
       return modules;
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

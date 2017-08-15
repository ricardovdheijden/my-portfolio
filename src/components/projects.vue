<template>
  <div class="projects">
    <div class="jumbotron">
      <div class="container">
        <h1>Projects</h1>
      </div>
    </div>

  <div class="container">
    <div class="professional project-section row">
      <h2>Professional projects</h2>
        <div v-for="(project, index) in projectsData.professional" class="">
          <div class="col-sm-4 project" v-on:click="showDetails(project)">
            <img class="logo" :src="project.images[0]">
            <div class="row col-sm-11">
              <ul class="list-unstyled">
                <li>{{project.name}}</li>
                <li><em>{{project.company}}</em></li>
              </ul>
            </div>
          </div>
        </div>
    </div>

    <div class="side project-section row">
      <h2>Side projects</h2>
      <div v-for="project in projectsData.side" class="">
        <div class="col-sm-4 project" v-on:click="showDetails(project)">
          <img class="logo" :src="project.images[0]">
          <div class="row col-sm-11">
            <ul class="list-unstyled">
              <li>{{project.name}}</li>
              <li><em>{{project.company}}</em></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <bootstrap-modal ref="projectDetails" size="large">
      <div slot="title">{{modalContent.name}}</div>
      <div slot="body" class="row">
        <div class="col-sm-6">
          <img class="logo" :src="modalContent.images[0]">
        </div>
        <div class="col-sm-6">
          <table>
            <tr v-if="modalContent.company">
              <th>Company:</th>
              <td>{{modalContent.company}}</td>
            </tr>
            <tr v-if="modalContent.website.url">
              <th>Website:</th>
              <td><a v-bind:href="modalContent.website.url" target="_blank">{{ modalContent.website.name }}</a></td>
            </tr>
            <tr v-if="modalContent.language">
              <th>Programming language:</th>
              <td>{{modalContent.language}}</td>
            </tr>
            <tr>
              <th>Project status:</th>
              <td><span v-if="modalContent.finished">Finished</span><span v-else="">In progress</span></td>
            </tr>
            <tr v-if="modalContent.sourceCode.url">
              <th>Source code:</th>
              <td><a v-bind:href="modalContent.sourceCode.url" target="_blank">{{ modalContent.sourceCode.name }}</a></td>
            </tr>
          </table>
        </div>
        <div class="col-sm-12">
          <p v-for="paragraph in modalContent.description">
            {{paragraph}}
          </p>
        </div>
      </div>
      <div slot="footer">

      </div>
    </bootstrap-modal>

  </div>
  </div>
</template>

<script>
import axios from 'axios'
import bootstrapModal from 'vue2-bootstrap-modal'
export default {
  name: 'projects',
  data () {
    return {
      projectsData: {},
      modalContent: {
        title: '',
        company: '',
        website: {},
        language: '',
        finished: false,
        description: '',
        sourceCode: {},
        images: ''
      }
    }
  },
  mounted () {
    let self = this
    axios.get('static/json/projects-data.json')
      .then(function (response) {
        self.projectsData = response.data
      })
  },
  methods: {
    showDetails: function (project) {
      this.modalContent.name = project.name
      this.modalContent.company = project.company
      this.modalContent.website = project.website
      this.modalContent.language = project.language
      this.modalContent.finished = project.finished
      this.modalContent.description = project.description
      this.modalContent.sourceCode = project.sourceCode
      this.modalContent.images = project.images
      this.$refs.projectDetails.open()
    }
  },
  components: {
    'bootstrap-modal': bootstrapModal
  }
}
</script>

<style scoped>
  .jumbotron {
    background-image: url('../assets/macbook-coding.jpg');
    background-repeat: no-repeat;
    background-position: center;
    min-height: 350px;
    background-size: cover;
  }

  .jumbotron > .container {
    color: white;
  }

  img {
    width: 100%;
    margin-bottom: 10px;
  }

  table {
    margin-bottom: 10px;
  }

  .project-section .project {
    margin-bottom: 20px;
    cursor: pointer;
    cursor: hand;
  }
</style>

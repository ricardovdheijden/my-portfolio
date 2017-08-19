<template>
  <div class="projects">
    <div class="jumbotron">
      <div class="container">
        <h1>Projects</h1>
        <p>{{projectsData.intro}}</p>
      </div>
    </div>

    <div class="container">
      <div class="professional project-section container row">
        <h2>Professional projects</h2>
        <div v-for="project in projectsData.professional">
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

      <div class="side project-section container row">
        <h2>Side projects</h2>
        <div v-for="project in projectsData.side">
          <div class="col-sm-4 project" v-on:click="showDetails(project)">
            <img class="logo" :src="project.images[0]">
            <div class="row col-sm-11 project-details">
              <ul class="list-unstyled">
                <li>{{project.name}}</li>
                <li><em>{{project.company}}</em></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <bootstrap-modal ref="projectDetails" size="large">
        <div slot="title">{{projectDetails.name}}</div>
        <div slot="body" class="row">
          <div class="col-sm-6">
            <img class="logo" :src="projectDetails.images[0]">
          </div>
          <div class="col-sm-6">
            <table class="table">
              <tr v-if="projectDetails.company">
                <th>Company:</th>
                <td>{{projectDetails.company}}</td>
              </tr>
              <tr v-if="projectDetails.website.url">
                <th>Website:</th>
                <td><a v-bind:href="projectDetails.website.url" target="_blank">{{ projectDetails.website.name }}</a></td>
              </tr>
              <tr v-if="projectDetails.language">
                <th>Programming&nbsp;language:</th>
                <td>{{projectDetails.language}}</td>
              </tr>
              <tr>
                <th>Project status:</th>
                <td><span v-if="projectDetails.finished">Finished</span><span v-else="">In progress</span></td>
              </tr>
              <tr v-if="projectDetails.sourceCode.url">
                <th>Source code:</th>
                <td><a v-bind:href="projectDetails.sourceCode.url" target="_blank">{{ projectDetails.sourceCode.name }}</a></td>
              </tr>
            </table>
          </div>
          <div class="col-sm-12">
            <p v-for="paragraph in projectDetails.description">
              {{paragraph}}
            </p>
          </div>
        </div>
        <div slot="footer">
          <button type="button" class="btn btn-default btn-md" v-on:click="$refs.projectDetails.close()">Close</button>
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
      projectDetails: {
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
      this.projectDetails = project
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
    background: url('../assets/macbook-coding.jpg') no-repeat center;
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

  table th,
  table td {
    vertical-align: top;
  }

  .project-section .project {
    margin-bottom: 20px;
    cursor: pointer;
    cursor: hand;
  }
</style>

<template>
  <div class="projects">
    <div class="jumbotron">
      <div class="container">
        <h1>Projects</h1>
      </div>
    </div>

    <div class="container">
      <div class="professional project-section container row">
        <h2>Professional</h2>
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
        <h2>Others</h2>
        <div v-for="project in projectsData.others">
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
          <div class="col-sm-12">
            <div class="col-sm-offset-1 col-sm-10">
              <img class="logo" :src="projectDetails.images[0]">
            </div>
          </div>
          <div class="col-sm-12">
            <p v-for="paragraph in projectDetails.description">
              {{paragraph}}
            </p>
          </div>
          <div class="col-sm-12">
            <table class="table">
              <tr>
                <th class="col-xs-2">Company:</th>
                <td v-if="projectDetails.company">{{projectDetails.company}}</td>
                <td v-else="">-</td>
              </tr>
              <tr>
                <th class="col-xs-2">Website:</th>
                <td v-if="projectDetails.website.url"><a v-bind:href="projectDetails.website.url" target="_blank">{{ projectDetails.website.name }}</a></td>
                <td v-else="">-</td>
              </tr>
              <tr>
                <th class="col-xs-2">Programming&nbsp;languages:</th>
                <td v-if="projectDetails.language">{{projectDetails.language}}</td>
                <td v-else="">-</td>
              </tr>
              <tr>
                <th class="col-xs-2">Project Status:</th>
                <td><span v-if="projectDetails.finished">Finished</span><span v-else="">In progress</span></td>
              </tr>
              <tr>
                <th class="col-xs-2">Source Code:</th>
                <td v-if="projectDetails.sourceCode.url"><a v-bind:href="projectDetails.sourceCode.url" target="_blank">{{ projectDetails.sourceCode.name }}</a></td>
                <td v-else="">-</td>
              </tr>
            </table>
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
    this.$store.state.activePage = 'projects'
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
    margin-top: 10px;
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

  /* Bootstrap grid adjustments */
  /* col-xs only */
  @media (max-width: 767px) {
    .jumbotron {
      min-height: 150px;
    }
  }
</style>

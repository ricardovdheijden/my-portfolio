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
          <div class="col-sm-4 project" v-on:click="showDetails(project.name, project.description, project.image, project.company)">
            <img class="logo" :src="project.image">
            <div class="row col-sm-11">
              {{project.name}}<br />
              <em>{{project.company}}</em>
            </div>
            <div class="col-sm-1">
              <i class="glyphicon glyphicon-ok"></i>
            </div>
          </div>
        </div>
    </div>

    <div class="side project-section row">
      <h2>Side projects</h2>
      <div v-for="project in projectsData.side" class="">
        <div class="col-sm-4 project" v-on:click="showDetails(project.name, project.description, project.image)">
          <img class="logo" :src="project.image">
          <div class="row col-sm-11">
            {{project.name}}
          </div>
          <div class="col-sm-1">
            <i class="glyphicon glyphicon-ok"></i>
          </div>
        </div>
      </div>
    </div>

    <bootstrap-modal ref="theModal" size="large">
      <div slot="title">{{modalContent.title}}<span v-if="modalContent.company"> ({{modalContent.company}})</span></div>
      <div slot="body">
        <div class="col-sm-6">
          <img class="logo" :src="modalContent.image">
        </div>
        <div class="col-sm-12">
          {{modalContent.description}}
        </div>
      </div>
      <div slot="footer">
        Your footer here
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
        description: '',
        image: ''
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
    showDetails: function (title, description, image, company) {
      this.modalContent.title = title
      this.modalContent.company = company
      this.modalContent.description = description
      this.modalContent.image = image
      this.$refs.theModal.open()
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
  }

  .project-section .project {
    margin-bottom: 20px;
    cursor: pointer;
    cursor: hand;
  }
</style>

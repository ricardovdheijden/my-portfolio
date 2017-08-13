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
          <div class="col-sm-4 project">
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
        <div class="col-sm-4 project">
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
    <button data-toggle="modal" data-target="#myModal" class="btn btn-primary">
      My Button
    </button>
    <div class="modal fade" id="myModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">My Modal</h4>
          </div>
          <div class="modal-body">
            <p>My Modal Body</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'projects',
  data () {
    return {
      projectsData: {}
    }
  },
  mounted () {
    let self = this
    axios.get('static/json/projects-data.json')
      .then(function (response) {
        self.projectsData = response.data
      })
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
  }
</style>

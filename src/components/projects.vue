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
        <div v-for="project in projectsData.professional" class="">
          <div class="col-sm-4 project">
            <img class="logo" :src="project.image">
            {{project.name}}<br />
            <em>{{project.company}}</em>
          </div>
        </div>
    </div>

    <div class="side project-section row">
      <h2>Side projects</h2>
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

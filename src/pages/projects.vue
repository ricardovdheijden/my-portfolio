<template>
  <div>
    <project-details></project-details>
    <projects-overview :projectsData="projectsData"></projects-overview>
  </div>
</template>

<script>
  import axios from 'axios'
  import projectsOverview from '../components/projects-overview.vue'
  import projectDetails from '../components/project-details.vue'

  export default {
    data () {
      return {
        projectsData: {}
      }
    },
    mounted () {
      let self = this
      this.$store.state.activePage = 'projects'
      axios.get('static/json/projects-data.json')
        .then(function (response) {
          self.projectsData = response.data
        })
    },
    components: {
      'projects-overview': projectsOverview,
      'project-details': projectDetails
    }
  }
</script>

<style scoped>

</style>

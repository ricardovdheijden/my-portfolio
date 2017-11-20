<template>
  <project-overview :projectsData="projectsData"></project-overview>
</template>

<script>
  import axios from 'axios'
  import projectOverview from '../components/project-overview.vue'

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
      'project-overview': projectOverview
    }
  }
</script>

<style scoped>

</style>

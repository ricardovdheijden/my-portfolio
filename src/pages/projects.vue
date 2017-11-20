<template>
  <projects-overview :projectsData="projectsData"></projects-overview>
</template>

<script>
  import axios from 'axios'
  import projectsOverview from '../components/projects-overview.vue'

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
      'projects-overview': projectsOverview
    }
  }
</script>

<style scoped>

</style>

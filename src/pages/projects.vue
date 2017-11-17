<template>
  <project-overview></project-overview>
</template>

<script>
  import projectOverview from '../components/project-overview.vue'

  export default {
    mounted () {
      this.$store.state.activePage = 'projects'
    },
    components: {
      'project-overview': projectOverview
    }
  }
</script>

<style scoped>

</style>

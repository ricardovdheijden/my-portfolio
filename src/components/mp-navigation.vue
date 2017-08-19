<template>
  <div class="navbar navbar-default ">
    <div class="container">
      <ul class="nav nav-pills">
        <li v-bind:class="{active: activePage=='projects'}"><a href="/#/projects">Projects</a></li>
        <li v-bind:class="{active: activePage=='cv'}"><a href="/#/cv">CV</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activePage () {
      return this.$store.state.activePage
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: white;
  margin-bottom: 0;
  border-radius: 0;
  border: 0;
}
</style>

<template>
  <div id="app">
    <mp-navigation></mp-navigation>
    <router-view class="view"></router-view>
    <mp-footer></mp-footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html {
    overflow-y: scroll;
  }

  .view {
    min-height: calc(100vh - 60px - 50px);
  }

  @import '../node_modules/bootstrap/dist/css/bootstrap.css'
</style>

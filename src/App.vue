<template>
  <div id="app">
    <mp-navigation></mp-navigation>
    <router-view></router-view>
    <!--<mp-footer></mp-footer>-->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css'
</style>

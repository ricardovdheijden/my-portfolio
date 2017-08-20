<template>
  <div class="container introduction">
    <div class="row row-eq-height">
      <div class="col-sm-6 image">
        <img class="logo" :src="homeData.image">
      </div>
      <div class="col-sm-6">
        <h1>{{homeData.name}}</h1>
        <h2>{{homeData.role}}</h2>
        <p v-for="paragraph in homeData.introduction">{{paragraph}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      homeData: {}
    }
  },
  mounted () {
    this.$store.state.activePage = 'home'
    let self = this
    axios.get('static/json/home-data.json')
      .then(function (response) {
        self.homeData = response.data
      })
  }
}
</script>

<style scoped>
  img {
    width: 100%;
  }
  .image {
    padding-left: 0;
    padding-right: 0;
  }

  .introduction {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: lightgrey;
  }
</style>

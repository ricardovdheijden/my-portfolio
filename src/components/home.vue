<template>
  <div class="container">
    <div class="home row row-eq-height">
      <div class="col-sm-4 image">
        <img class="logo" :src="homeData.image">
      </div>
      <div class="col-sm-8 introduction">
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
  .home {
    margin-bottom: 40px;
  }
  @media (min-height: 750px) {
    .home {
      margin-top: calc(40vh - 237px - 60px); /*calc(100vh - 60px - 50px)*/
    }
  }

  /* col-xs only */
  @media (max-width: 767px) {
    .home {
      margin-top: 0;
    }
    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 25px;
    }
  }

  /* col-sm and up */
  @media (min-width: 768px) {
    h1 {
      margin-top: 0;
    }
  }
</style>

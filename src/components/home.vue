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

  /* col-xs only */
  @media (max-width: 767px) {
    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 25px;
    }

    .introduction {
      margin-top: 0;
      margin-bottom: 0;
      background-color: white;
    }
  }

  /* col-sm and up */
  @media (min-width: 768px) {
    .introduction {
      margin-top: 50px;
      margin-bottom: 50px;
      background-color: lightgrey;
    }
  }

  /* col-md and up */
  @media (min-width: 992px) {
    .introduction {
      margin-bottom: 100px;
    }
  }

  /* col-lg and up */
  @media (min-width: 1200px) {
    .introduction {
      margin-bottom: 180px;
    }
  }
</style>

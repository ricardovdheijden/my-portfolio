<template>
  <div class="container">
    <div class="home row row-eq-height">
      <div class="col-sm-6 image">
        <img class="logo" :src="contactData.image">
      </div>
      <div class="col-sm-6 contacts">
        <div class="row">
          <div class="col-xs-12">
            <h1>{{contactData.title}}</h1>
            <p>{{contactData.introduction}}</p>
          </div>
        </div>
        <div class="row contact" v-for="contact in contactData.contacts">
          <div class="col-xs-2">
            <img class="logo" :src="contact.logo">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'contact',
  data () {
    return {
      contactData: {}
    }
  },
  mounted () {
    this.$store.state.activePage = 'contact'
    let self = this
    axios.get('static/json/contact-data.json')
      .then(function (response) {
        self.contactData = response.data
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
  .contact {
    margin-bottom: 20px;
  }

  /* col-xs only */
  @media (max-width: 767px) {
    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 25px;
    }
  }
</style>

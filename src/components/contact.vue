<template>
  <div class="container">
    <div class="contact row row-eq-height">
      <div class="col-sm-6 image">
        <img class="logo" src="../assets/pen.png">
      </div>
      <div class="col-sm-6 contacts">
        <div class="row">
          <div class="col-xs-12">
            <h1>{{contactData.title}}</h1>
            <p>{{contactData.introduction}}</p>
          </div>
        </div>
        <div class="row contact-item" v-for="contact in contactData.contacts">
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
  .contact {
    margin-bottom: 40px;
  }
  .contact-item {
    margin-bottom: 20px;
  }
</style>

<template>
  <div class="contact">
    <div class="jumbotron">
      <div class="container">
        <h1>Contact</h1>
      </div>
    </div>

    <div class="container contact-section">
      <h2>{{contactData.introduction}}</h2>
      <div class="row container contact-item" v-for="contact in contactData.contacts">
        <div class="">
          <h3><img class="logo" :src="contact.logo"><a v-bind:href="contact.link" target="_blank">{{ contact.text }}</a></h3>
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
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jumbotron {
    background-image: url('../assets/iPhone.jpg');
    background-repeat: no-repeat;
    background-position: left;
    min-height: 350px;
    background-size: cover;
  }

  .jumbotron > .container {
    color: white;
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }

  /* Bootstrap grid adjustments */
  /* col-sm and up */
  @media (min-width: 768px) {
    .jumbotron {
      background-position: bottom;
    }
  }

  /* col-lg and up */
  @media (min-width: 1200px) {
    .jumbotron {
      background-position: 0 -40px;
    }
  }
</style>

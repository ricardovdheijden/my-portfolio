<template>
  <div class="contact">
    <div class="jumbotron">
      <div class="container">
        <h1>{{contactData.title}}</h1>
      </div>
    </div>

    <div class="container">
      <div class="contact-section col-sm-6 container row">
        <h2>{{contactData.connect.title}}</h2>
        <div class="contact-item" v-for="contact in contactData.connect.contacts">
          <h3><img class="logo" :src="contact.logo"><a v-bind:href="contact.link" target="_blank">{{ contact.text }}</a></h3>
        </div>
      </div>

      <div class="follow-section col-sm-6 container row">
        <h2>{{contactData.follow.title}}</h2>
        <div class="channel-item" v-for="channel in contactData.follow.channels">
          <h3><img class="logo" :src="channel.logo"><a v-bind:href="channel.link" target="_blank">{{ channel.text }}</a></h3>
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
    background-image: url('../assets/bottle-letter.jpg');
    background-repeat: no-repeat;
    background-position: left;
    min-height: 350px;
    background-size: cover;
  }

  .jumbotron > .container {
    color: white;
  }

  .contact-section {
    margin-bottom: 20px;
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }

  /* Bootstrap grid adjustments */
  /* col-xs and up */
  @media (max-width: 768px) {
    .jumbotron {
      min-height: 150px;
    }
  }
</style>

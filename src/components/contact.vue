<template>
  <div class="contact">
    <div class="jumbotron">
      <div class="container">
        <h1>{{contactData.title}}</h1>
      </div>
    </div>

    <div class="contact-section">
      <div class="contact-item" v-for="contact in contactData.contacts">
        <h3>
          <img class="logo" :src="contact.logo">
          <a v-bind:href="contact.link" target="_blank">{{ contact.text }}</a>
        </h3>
        <div>
          <img class="qr" :src="contact.qr">
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
  }

  .contact-item {
    width: 440px;
    padding-left: 20px;
    padding-bottom: 20px;
    margin: 20px;
    border: 1px solid lightgrey;
  }

  img.logo {
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

    .contact-section {
      display: flex;
      flex-direction: column;
    }

    .contact-item {
      width: 305px;
      padding-bottom: 20px;
      margin: 20px;
      border: none;
    }

    .qr {
      width: 250px;
      height: 250px;
    }
  }
</style>

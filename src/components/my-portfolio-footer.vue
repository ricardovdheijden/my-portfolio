<template>
  <div class="footer">
    <div class="container">
      <div class="row links col-xs-12">
        <ul>
          <li v-for="link in footerData.links"><a v-bind:href="link.url" target="_blank">{{ link.name }}</a></li>
          <li><a href="#/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      footerData: {}
    }
  },
  mounted () {
    let self = this
    axios.get('static/json/footer-data.json')
      .then(function (response) {
        self.footerData = response.data
      })
  }
}
</script>

<style scoped>
.footer {
  color: white;
  background-color: dimgrey;
  height: 60px;
}

a {
  color: white;
}

.links {
  margin-top: 20px;
  margin-bottom: 20px;
}

.links ul {
  padding: 0;
}

.links ul li {
  float: left;
  list-style-type: none;
}

.links ul li:after {
  content: "|";
  padding: 0 .5em;
}

ul li:last-child:after {
  content: "";
  padding: 0;
}
</style>

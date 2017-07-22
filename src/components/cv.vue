<template>
  <div class="cv">
    Hello CV
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'cv',
  data () {
    return {

    }
  },
  mounted () {
    axios.get('static/json/cv-data.json')
      .then(function (response) {
        console.log(response.data)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

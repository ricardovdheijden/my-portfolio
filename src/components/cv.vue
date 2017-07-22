<template>
  <div class="cv">
    <h2>Profile</h2>
    <p>{{cvData.profile}}</p>

    <h2>Work Experience</h2>

    <h2>Education</h2>
    <p v-for="education in cvData.education">
      <strong>{{education.degree}} {{education.fieldOfStudy}}, {{education.school}}</strong><br />
      {{education.city}}, {{education.country}} - {{education.startYear}}-{{education.endYear}}
    </p>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'cv',
  data () {
    return {
      cvData: {}
    }
  },
  mounted () {
    let self = this
    axios.get('static/json/cv-data.json')
      .then(function (response) {
        self.cvData = response.data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="cv">
    <div class="jumbotron">
      <div class="container">
        <h1>{{cvData.personal.name}}</h1>
        <h2>{{cvData.personal.role}} | {{cvData.personal.residence}} | Linkedin</h2>
        <p>{{cvData.profile}}</p>
      </div>
    </div>

    <div class="container">
      <h2>Work Experience</h2>
      <p v-for="work in cvData.workExperience">
        <strong>
          {{work.title}}, {{work.company}} -
          {{monthName(work.startMonth)}} {{work.startYear}}-<span v-if="work.endYear">{{monthName(work.endMonth)}} {{work.endYear}}</span><span v-else>Present</span>
        </strong>
        <br />
      <ul v-for="summaryLine in work.summary">
        <li>{{summaryLine}}</li>
      </ul>
      </p>

      <h2>Education</h2>
      <p v-for="education in cvData.education">
        <strong>
          <span v-if="education.degree">{{education.degree}} </span>
          <span v-if="education.fieldOfStudy">{{education.fieldOfStudy}}, </span>
          <span v-if="education.school"></span>{{education.school}}
        </strong>
        <br />
        <span v-if="education.city">{{education.city}}, </span>
        {{education.country}} -
        {{education.startYear}}-<span v-if="education.endYear">{{education.endYear}}</span><span v-else>Present</span>
      </p>

      <h2>Certification & Skills</h2>
      <ul v-for="certificationSkill in cvData.certificationsSkills">
        <li>{{certificationSkill}}</li>
      </ul>

      <h2>Interests & Hobbies</h2>
      <div v-for="interestHobby in cvData.interestsHobbies">
        <span>{{interestHobby}}</span><br />
      </div>
    </div>

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
  },
  methods: {
    monthName: function (value) {
      switch (value) {
        case 1: return 'January'
        case 2: return 'February'
        case 3: return 'March'
        case 4: return 'April'
        case 5: return 'May'
        case 6: return 'June'
        case 7: return 'July'
        case 8: return 'August'
        case 9: return 'September'
        case 10: return 'October'
        case 11: return 'November'
        case 12: return 'December'
        default: return ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jumbotron {
    background-image: url('../assets/macbook.jpg');
    /*background-position: center;*/
    /*background-position: top;*/
    background-repeat: no-repeat;
    min-height: 350px;
   background-size: cover;
  }

  .jumbotron > .container {
    color: white;
  }

  .cv {
    /*background-color: lightgray;*/
  }

</style>

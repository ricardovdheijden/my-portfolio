<template>
  <div class="cv">
    <div class="jumbotron">
      <div class="container">
        <h1>{{cvData.personal.name}}</h1>
        <h2>{{cvData.personal.role}} | {{cvData.personal.residence}}</h2>
        <p>{{cvData.profile}}</p>
      </div>
    </div>

    <div class="container">
      <div class="work-experience cv-section">
        <h2>Work Experience</h2>
        <div v-for="work in cvData.workExperience" class="container row">
          <div class="row col-sm-1">
            <img class="logo" :src="work.logo">
          </div>
          <div class="row col-sm-4 col-md-3">
            <span class="col-xs-5 col-sm-12"><strong>{{work.company}}</strong></span>
            <span class="col-xs-7 col-sm-12 work-title text-right"><em>{{work.title}}</em></span>
            <span class="col-xs-12">{{monthName(work.startMonth)}} {{work.startYear}} - <span v-if="work.endYear">{{monthName(work.endMonth)}} {{work.endYear}}</span><span v-else>Present</span></span>
          </div>
          <div class="summary-line col-sm-7 col-md-8">
            <ul v-for="summaryLine in work.summary">
              <li>{{summaryLine}}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="education cv-section">
        <h2>Education</h2>
        <div v-for="education in cvData.education" class="container row">
          <div class="row col-sm-1">
            <img class="logo" :src="education.logo">
          </div>
          <div class="col-sm-11">
            <strong>
              <span v-if="education.degree">{{education.degree}} </span>
              <span v-if="education.fieldOfStudy">{{education.fieldOfStudy}}, </span>
              <span v-if="education.school"></span>{{education.school}}
            </strong>
            <br />
            <span v-if="education.city">{{education.city}}, </span>
            {{education.country}} -
            {{education.startYear}}-<span v-if="education.endYear">{{education.endYear}}</span><span v-else>Present</span>
          </div>
        </div>
      </div>

      <div class="certification-skills cv-section">
        <h2>Certification & Skills</h2>
        <ul v-for="certificationSkill in cvData.certificationsSkills">
          <li>{{certificationSkill}}</li>
        </ul>
      </div>

      <div class="interests-hobbies cv-section">
        <h2>Interests & Hobbies</h2>
        <div v-for="interestHobby in cvData.interestsHobbies">
          <span>{{interestHobby}}</span><br />
        </div>
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
        case 1: return 'Jan'
        case 2: return 'Feb'
        case 3: return 'Mar'
        case 4: return 'Apr'
        case 5: return 'May'
        case 6: return 'June'
        case 7: return 'July'
        case 8: return 'Aug'
        case 9: return 'Sept'
        case 10: return 'Oct'
        case 11: return 'Nov'
        case 12: return 'Dec'
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
    background-repeat: no-repeat;
    min-height: 350px;
   background-size: cover;
  }

  .jumbotron > .container {
    color: white;
  }

  .cv-section > .row {
    margin-bottom: 20px;
  }

  .cv-section {
    margin-bottom: 40px;
  }

  .work-experience .summary-line ul {
    margin-bottom: 0px;
  }

  /* Bootstrap grid adjustments */
  /* col-xs only */
  @media (max-width: 767px) {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 25px;
    }
    img.logo {
      display: none;
    }
  }

  /* col-sm and up */
  @media (min-width: 768px) {
    img.logo {
      margin-top: 5px;
      width: 35px;
      height: 35px;
    }
    .work-title.text-right {
      text-align:left;
    }
  }

  /* col-md and up */
  @media (min-width: 992px) {
    img.logo {
      width: 50px;
      height: 50px;
    }
  }
</style>

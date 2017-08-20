<template>
  <div class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#" v-on:click="mobileNavOpen = false">Ricardo van der Heijden</a>
        <a class="btn btn-default btn-lg mobile-nav-toggle" v-on:click="mobileNavOpen = !mobileNavOpen">
          <span class="glyphicon" :class="{'glyphicon-remove': mobileNavOpen, 'glyphicon-menu-hamburger': !mobileNavOpen}"></span>
        </a>
      </div>
        <div class="collapse navbar-collapse" v-bind:class="{in: mobileNavOpen}">
          <!-- The menu is generated from the 'navigation' array -->
          <ul class="nav navbar-nav navbar-right">
            <li v-for="item in navigation"
                :class="{active: activePage==item.page}"
                v-on:click="mobileNavOpen = false">
                <a :href="'#/'+item.page">{{item.title}}</a>
            </li>
          </ul>
        </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activePage () {
      return this.$store.state.activePage
    }
  },
  data () {
    return {
      navigation: [
        {
          title: 'Projects',
          page: 'projects'
        },
        {
          title: 'CV',
          page: 'cv'
        }
      ],
      mobileNavOpen: false
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: white;
  margin-bottom: 0;
  border-radius: 0;
  border: 0;
}

.mobile-nav-toggle {
  margin-top: 2px;
  margin-right: 2px;
  float: right;
}

@media (min-width: 768px) {
  .mobile-nav-toggle{
    display: none;
  }
}
</style>

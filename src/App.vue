/* eslint-disable */
<template>
  <div id="activityApp">
    <h1>New Vue Activity App</h1>	    
    
    <TheNavbar />
    <section class="container">
      <div class="columns">
        <div class="column is-3">
         <ActivityCreate
            :categories="categories"
            @activityCreated="addActivity" 
          />
        </div>
        <div class="column is-9">
          <div 
              class="box content" 
              :class="{fetching: isFetching, 'has-error': error}">
            <div v-if="error">
              {{ error }}
            </div>
            <div v-else>
              <div v-if="isFetching">
                Loading...
              </div>
              <ActivityItem 
                v-for="activity in activities"
                :key="activity.id"
                :activity="activity"
                :categories="categories"
              />
            </div>
            <div v-if="!isFetching">
              <div  
                class="activity-length"> 
                Currently {{ activityLength }} activities
              </div>
              <div 
                class="activity-motivation">
                {{ activityMotivation }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

import ActivityItem from '@/components/ActivityItem'
import ActivityCreate from '@/components/ActivityCreate'
import TheNavbar from '@/components/TheNavbar'
import { fetchActivities, fetchCategories, fetchUser } from '@/api'
import { debug } from 'util';

export default {
  name: 'App',
  components: { ActivityItem, ActivityCreate, TheNavbar },
  data () {
    return {
      isFetching: false,
      error: null,
      user: {},
      activities: {},
      categories: {}
    }
  },
  computed: {
    activityLength () {
      const activitiesKeyArray = Object.keys(this.activities)
      const activityLength = activitiesKeyArray.length

      return activityLength
    },
    activityMotivation () {
      if (this.activityLength && this.activityLength < 5) {
        return 'Nice to see some activities'
      } else if (this.activityLength >= 5){
        return 'So many activities! Good job!'
      } else {
        return 'No activitie, so sad'
      }
    }
  },
  beforeCreate () {
    console.log('beforeCreate Called!')
  },
  created () {
    this.isFetching = true
    fetchActivities()
      .then(activities => {
        this.activities = activities
        this.isFetching = false
      })
      .catch(err => {
        this.error = err
        this.isFetching = false
      })

    this.categories = fetchCategories()
    this.user = fetchUser()
  },
  beforeMount () {
    console.log('beforeMount Called!')
  },
  beforeUpdate () {
    console.log('beforeUpdate Called!')
  },
  beforeDestroy () {
    console.log('beforeDestroy Called!')
  },
  destroyed () {
    console.log('destroyed Called!')
  },
  methods: {
    addActivity (newActivity) {
        Vue.set(this.activities, newActivity.id, newActivity)
    }
  }
}

</script>

<style>
#activityApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 html,body {
  font-family: 'Open Sans', serif;
  background: #F2F6FA;
}
footer {
  background-color: #F2F6FA !important;
}
.fetching{
  border: 2px solid orange;
}

.has-error {
  border: 2px solid red;
}
.activity-motivation{
  float: right;
}
.activity-length{
  display: inline-block
}
 .example-wrapper {
  margin-left: 30px;
}
 .topNav {
  border-top: 5px solid #3498DB;
}
.topNav .container {
  border-bottom: 1px solid #E6EAEE;
}
.container .columns {
  margin: 3rem 0;
  text-align: left;
}
.navbar-menu .navbar-item {
  padding: 0 2rem;
}
aside.menu {
  padding-top: 3rem;
}
aside.menu .menu-list {
  line-height: 1.5;
}
aside.menu .menu-label {
  padding-left: 10px;
  font-weight: 700;
}
.button.is-primary.is-alt {
  background: #00c6ff;
  background: -webkit-linear-gradient(to bottom, #0072ff, #00c6ff);
  background: linear-gradient(to bottom, #0072ff, #00c6ff);
  font-weight: 700;
  font-size: 14px;
  height: 3rem;
  line-height: 2.8;
}
.media-left img {
  border-radius: 50%;
}
.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8F99A3;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #E6EAEE;
}
article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.menu-list li{
  padding: 5px;
}
 .navbar-brand > h1 {
  font-size: 31px;
  padding: 20px;
}
</style>

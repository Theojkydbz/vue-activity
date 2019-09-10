<template>
  <article class="post">
    <h4 class="post-title">{{ activity.title }}</h4>
    <p class="post-category">{{ textUtility_capitalize(categories[activity.category].text) }}</p>
    <p class="post-notes">{{ activity.notes }}</p>
    <div class="media">
    <div class="media-left">
        <p class="image is-32x32">
        <img src="../assets/user.png">
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Filip Jerga</a> updated {{ activity.updatedAt | prettyTime }} &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <span>
          Progress: 
            <!-- <span 
              :class="'color-' + ProgressColor"> 
              {{ activity.progress }} %
            </span> -->
            <span 
              :style="{'color': ProgressColor}"> 
              {{ activity.progress }} %
            </span> 
        </span>
      </div>
    </div>
  </article>
</template>

<script>
import textUtility from '@/mixins/textUtility'

export default {
  mixins: [textUtility],
  props: {
    categories:{
      type: Object,
      required: true
    },
    activity: {
      type: Object,
      required: true
    }
  },
  computed:{
    ProgressColor () {
      const progress = this.activity.progress
      if( progress <= 0 ){
        return 'red'
      } else if( progress <= 50 ){
        return 'orange'
      } else {
        return 'green'
      }

    }
  }
}
</script>

<style scoped>
.post-title{
  margin-bottom: 5px
}
.post{
     text-align: left;
}

/* .color-red {
    color: red;
}

.color-orange {
    color: orange;
}

.color-green {
    color: green;
} */
 </style>

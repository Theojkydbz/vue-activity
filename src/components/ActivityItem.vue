<template>
  <article class="post">
    <h4 class='post-title'>{{ activity.title }}</h4>
    <p class='post-notes'>{{ activity.notes }}</p>
    <div class="media">
    <div class="media-left">
        <p class="image is-32x32">
        <img src="../assets/user.png">
        </p>
      </div>



      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Filip Jerga</a> updated {{activity.updatedAt}} minutes ago &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <span>Progress Bar Here</span>
      </div>
    </div>

  </article>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post{
     text-align: right;
}
 </style>

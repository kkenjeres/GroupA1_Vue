<template>
  <div class="bx--grid">
    <div class="bx--row blog-item-heading">
      <div class="bx--col-lg-14 bx--offset-lg-1">
        <h1 class="post-title">
          {{ title }}
        </h1>
        <p>{{ date }}</p>
      </div>
    </div>
    <div class="bx--row">
      <div class="bx--col-lg-14 bx--offset-lg-1">
        <img :src="image" class="image-post">
      </div>
    </div>

    <div class="bx--row post-main-content">
      <div class="bx--col-lg-8 bx--offset-lg-3">
        <div v-html="richtext" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData (context) {
    return context.app.$storyapi
      .get('cdn/stories/blog/' + context.params.id, {
        version: 'draft'
      })
      .then((res) => {
        return {
          image: res.data.story.content.PostImage,
          title: res.data.story.content.Title,
          content: res.data.story.content.PostText,
          date: res.data.story.content.Date
        }
      })
  },
  computed: {
    richtext () {
      return this.content ? this.$storyapi.richTextResolver.render(this.content) : ''
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/carbon-utils.scss";
.image-post {
  display: block;
  height: auto !important;
  width: 100%;
  margin: 0 auto;
  position: center;
  // text-align: center;
}

.post-title {
  padding-bottom: $layout-01;
}

.blog-item-heading {
  padding-top: $layout-04;
  padding-bottom: $layout-04;
}

.post-main-content {
  padding-top: $layout-04;
  padding-bottom: $layout-06;
}
</style>

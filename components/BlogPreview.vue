<template>
  <div class="bx--col-md-4 bx--col-lg-4 martla">
    <a href="#" @click.prevent="openPost(id)">
      <div class="bx--aspect-ratio bx--aspect-ratio--1x1 field-image">
        <div
          class="bx--aspect-ratio--object back-pos"
          :style="{ backgroundImage: 'url(\''+postImage+'\')' }"
        />
      </div>
      <div class="bx--aspect-ratio bx--aspect-ratio--2x1 news-row">
        <div class="bx--aspect-ratio--object field-bottom">
          <h4>{{ title }}</h4>
          <p class="news-date">{{ postDate }}</p>
          <p>{{ postPreview }}</p>
        </div>
      </div>
    </a>
    <a href="#" class="preview" @click.prevent="openPost(id)">Подробнее ></a>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    postDate: String,
    postPreview: String,
    postImage: String
  },
  methods: {
    openPost (id) {
      this.$router.push('/news/' + id)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/carbon-utils.scss";
.field-image {
  .back-pos {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
.field-bottom {
  overflow: hidden;
  h4 {
    padding-top: $spacing-05;
    padding-left: $spacing-05;
    padding-right: $spacing-05;
  }
  .news-date {
    padding-top: $spacing-02;
    font-size: 0.8rem;
  }

  p {
    padding-top: $spacing-05;
    padding-left: $spacing-05;
    padding-right: $spacing-05;
  }
}

.martla a {
  color: black !important;
}

a.preview {
  display: block;
  padding-left: $spacing-05;
  padding-bottom: $layout-03;
  color: #0f62fe !important;
}

.news-row {
  margin-bottom: $layout-02;
}
</style>

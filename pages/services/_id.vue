<template>
  <section>
    <section class="service-item">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-md-8 bx--col-lg-8">
            <h1>{{ title }}</h1>
          </div>
          <div class="bx--col-md-8 bx--col-lg-8">
            <div class="bx--aspect-ratio bx--aspect-ratio--2x1">
              <div
                class="bx--aspect-ratio--object bg"
                :style="{backgroundImage: 'url('+ titlePic +')'}"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="bx--grid">
        <div class="bx--row service-item-description">
          <div class="bx--col-md-4 bx--col-lg-4">
            <h1>Описание</h1>
          </div>
          <div class="bx--col-md-12 bx--col-lg-12">
            <div v-html="richtextDescription" />
          </div>
        </div>
      </div>
    </section>
    <section class="service-item-photo">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-md-4 bx--col-lg-4">
            <h1>Портфолио</h1>
          </div>
          <div class="bx--col-md-4 bx--col-lg-4 bx--no-gutter">
            <div class="bx--aspect-ratio bx--aspect-ratio--1x1">
              <div
                class="bx--aspect-ratio--object bg"
                :style="{ backgroundImage: 'url('+ img1 +')' }"
              />
            </div>
          </div>
          <div class="bx--col-md-4 bx--col-lg-4 bx--no-gutter">
            <div class="bx--aspect-ratio bx--aspect-ratio--1x1">
              <div
                class="bx--aspect-ratio--object bg"
                :style="{ backgroundImage: 'url('+ img2 +')' }"
              />
            </div>
          </div>
          <div class="bx--col-md-4 bx--col-lg-4 bx--no-gutter">
            <div class="bx--aspect-ratio bx--aspect-ratio--1x1">
              <div
                class="bx--aspect-ratio--object bg"
                :style="{ backgroundImage: 'url('+ img3 +')' }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <bottom-order />
  </section>
</template>

<script>
import BottomOrder from '@/components/BottomOrder.vue'

export default {
  components: { BottomOrder },
  asyncData (context) {
    return context.app.$storyapi
      .get('cdn/stories/services/' + context.params.id, {
        version: 'draft'
      })
      .then((res) => {
        return {
          title: res.data.story.content.Title,
          text: res.data.story.content.DescriptionRich,
          titlePic: res.data.story.content.Pic,
          img1: res.data.story.content.Port1,
          img2: res.data.story.content.Port2,
          img3: res.data.story.content.Port3
        }
      })
  },
  data () {
    return {
      modalShow: false
    }
  },
  computed: {
    richtextDescription () {
      return this.text ? this.$storyapi.richTextResolver.render(this.text) : ''
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

.service-item {
  background-color: $ui-05;

  h1 {
    color: #ffffff;
    padding-top: $layout-06;
  }

  h4 {
    padding-top: $layout-02;
    color: #ffffff;
  }

  .bg {
    background-size: cover;
  }
}

.service-item-description {
  padding-top: $layout-06;
  padding-bottom: $layout-06;
}

.service-item-photo {
  padding-top: $layout-06;
  padding-bottom: $layout-06;
  background-color: $ui-01;
}

.description-second-row {
  position: relative;
  padding-top: $layout-07;
  &:after {
    position: absolute;
    content: "";
    height: 1px;
    background-color: #242424;
    width: 98%;
    top: 5rem;
    left: 1rem;
    right: 1rem;
  }
}
</style>

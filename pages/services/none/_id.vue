<template>
  <section>
    <section class="product-item">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-md-8 bx--col-lg-8">
            <h1>{{ title }}</h1>
            <h4>{{ manufatcur }}</h4>
          </div>
          <div class="bx--col-md-8 bx--col-lg-8">
            <div class="bx--aspect-ratio bx--aspect-ratio--2x1">
              <div
                class="bx--aspect-ratio--object bg"
                :style="{ backgroundImage: 'url('+ image +')' }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="bx--grid">
        <div class="bx--row">
          <cv-tabs selected="0">
            <cv-tab label="Обзор">
              <div class="bx--grid bx--no-gutter product-item-description">
                <div class="bx--row">
                  <div class="bx--col-md-4 bx--col-lg-4">
                    <h1>Описание</h1>
                  </div>
                  <div class="bx--col-md-12 bx--col-lg-12">
                    <div v-html="richtextDescription" />
                  </div>
                </div>
                <div class="bx--row description-second-row">
                  <div class="bx--col-md-4 bx--col-lg-4">
                    <h3>Особенности</h3>
                  </div>
                  <div class="bx--col-md-12 bx--col-lg-12">
                    <div v-html="richtextFeatures" />
                  </div>
                </div>
              </div>
            </cv-tab>
            <cv-tab label="Характеристики">
              <div class="bx--grid bx--no-gutter product-item-description">
                <div class="bx--row">
                  <div class="bx--col-md-4 bx--col-lg-4">
                    <h1>Характеристики</h1>
                  </div>
                  <div class="bx--col-md-12 bx--col-lg-12">
                    <div v-html="richtextCharact" />
                  </div>
                </div>
              </div>
            </cv-tab>
          </cv-tabs>
        </div>
      </div>
    </section>
    <section class="product-item-photo">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-md-4 bx--col-lg-4">
            <h1>Фото</h1>
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
  layout: 'productItem',
  asyncData (context) {
    return context.app.$storyapi
      .get('cdn/stories' + context.route.path, {
        version: 'draft'
      })
      .then((res) => {
        return {
          image: res.data.story.content.Img,
          title: res.data.story.content.Title,
          content: res.data.story.content.FullText,
          manufatcur: res.data.story.content.Manufactur,
          description: res.data.story.content.DescriptionRich,
          features: res.data.story.content.FeaturesRich,
          img1: res.data.story.content.ImgFullSize_1,
          img2: res.data.story.content.ImgFullSize2,
          img3: res.data.story.content.ImgFullSize3,
          charact: res.data.story.content.CharactRich
        }
      })
  },
  data () {
    return {
      modalShow: false
    }
  },
  computed: {
    richtextCharact () {
      return this.charact ? this.$storyapi.richTextResolver.render(this.charact) : ''
    },
    richtextDescription () {
      return this.description ? this.$storyapi.richTextResolver.render(this.description) : ''
    },
    richtextFeatures () {
      return this.features ? this.$storyapi.richTextResolver.render(this.features) : ''
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

.product-item {
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

.product-item-description {
  padding-top: $layout-06;
  padding-bottom: $layout-06;
  padding-left: $layout-01;
}

.product-item-photo {
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

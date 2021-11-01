<template>
  <section>
    <section class="product-item">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-md-8 bx--col-lg-8">
            <h1>{{ itemObject.title }}</h1>
            <h4>{{ itemObject.manufatcur }}</h4>
          </div>
          <div class="bx--col-md-8 bx--col-lg-8">
            <div class="bx--aspect-ratio bx--aspect-ratio--2x1">
              <div
                class="bx--aspect-ratio--object bg"
                :style="{ backgroundImage: 'url('+ itemObject.image +')' }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="breadcrumbs-navigation">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-lg-16 bx--col-md-16">
            <cv-breadcrumb :aria-label="ariaLabel">
              <cv-breadcrumb-item>
                <cv-link to="/">
                  Главная
                </cv-link>
              </cv-breadcrumb-item>
              <cv-breadcrumb-item>
                <cv-link to="/products">
                  Каталог
                </cv-link>
              </cv-breadcrumb-item>
              <cv-breadcrumb-item>
                <cv-link :to="breadcrumb[2]">
                  {{ breadcrumb[1] }}
                </cv-link>
              </cv-breadcrumb-item>
              <cv-breadcrumb-item>
                <cv-link :to="breadcrumb[3]">
                  {{ breadcrumb[0] }}
                </cv-link>
              </cv-breadcrumb-item>
              <cv-breadcrumb-item>
                <cv-link aria-current="page">
                  {{ itemObject.title }}
                </cv-link>
              </cv-breadcrumb-item>
            </cv-breadcrumb>
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
          <div class="bx--col-md-4 bx--col-lg-4 bx--no-gutter photo photo" @click="CHANGE_MODAL(1)">
            <div class="bx--aspect-ratio bx--aspect-ratio--1x1">
              <div
                class="bx--aspect-ratio--object bg"
                :style="{ backgroundImage: 'url('+ itemObject.img1 +')' }"
              />
            </div>
          </div>
          <div class="bx--col-md-4 bx--col-lg-4 bx--no-gutter photo" @click="CHANGE_MODAL(2)">
            <div class="bx--aspect-ratio bx--aspect-ratio--1x1">
              <div
                class="bx--aspect-ratio--object bg"
                :style="{ backgroundImage: 'url('+ itemObject.img2 +')' }"
              />
            </div>
          </div>
          <div class="bx--col-md-4 bx--col-lg-4 bx--no-gutter photo" @click="CHANGE_MODAL(3)">
            <div class="bx--aspect-ratio bx--aspect-ratio--1x1">
              <div
                class="bx--aspect-ratio--object bg"
                :style="{ backgroundImage: 'url('+ itemObject.img3 +')' }"
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
import { mapState, mapMutations } from 'vuex'

import BottomOrder from '@/components/BottomOrder.vue'

export default {
  components: { BottomOrder },
  layout: 'productItem',
  async asyncData ({ store, route, error }) {
    try {
      await store.dispatch('poductItem/loadProductItem', { itemPath: route.path })
    // .then((res) => { }).catch((e) => { error({ statusCode: 404 }) })
    } catch (er) {
      error({ statusCode: 404 })
    }
  },
  data () {
    return {
      modalShow: false
    }
  },
  computed: {
    ...mapState('poductItem', ['itemObject']),
    richtextCharact () {
      return this.itemObject.charact ? this.$storyapi.richTextResolver.render(this.itemObject.charact) : ''
    },
    richtextDescription () {
      return this.itemObject.description ? this.$storyapi.richTextResolver.render(this.itemObject.description) : ''
    },
    richtextFeatures () {
      return this.itemObject.features ? this.$storyapi.richTextResolver.render(this.itemObject.features) : ''
    },
    breadcrumb () {
      let item = ''
      let parentItemId = ''
      let parentItem = ''
      let parentLink = ''
      let itemLink = ''
      for (const key in this.$store.state.sitemap) {
        for (const pKey in this.$store.state.sitemap[key].children) {
          const currentRoute = this.$route.path
          if (this.$store.state.sitemap[key].children[pKey].item.real_path === currentRoute.replace('/' + this.$route.params.id, '')) {
            item = this.$store.state.sitemap[key].children[pKey].item.name
            itemLink = this.$store.state.sitemap[key].children[pKey].item.real_path
            parentItemId = this.$store.state.sitemap[key].children[pKey].item.parent_id
          }
        }
      }
      parentItem = this.$store.state.sitemap[parentItemId].item.name
      parentLink = this.$store.state.sitemap[parentItemId].item.real_path
      return [item, parentItem, parentLink, itemLink]
    }
  },
  methods: {
    ...mapMutations('poductItem', ['CHANGE_MODAL'])
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

.bx--breadcrumb {
  padding: 8px 0px;
}

.breadcrumbs-navigation {
  width: 100%;
  // border-top: 1px solid black;
  // border-bottom: 1px solid black;
}

.photo {
  cursor: pointer;
  &:hover {
    border: #0043ce solid 2px;
  }
}

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

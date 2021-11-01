<template>
  <div>
    <header-gr />
    <cv-side-nav id="side-nav" fixed expanded>
      <cv-side-nav-items>
        <cv-side-nav-menu
          v-for="(items, key) in sitemap"
          :key="key"
          :title="items.item.name"
          :expanded="routerCheck.includes(items.item.real_path) ? true : false"
        >
          <cv-side-nav-menu-item
            v-for="(ite, key) in items.children"
            :key="key"
            :to="'/'+ ite.item.slug"
            :active=" ($route.params.subcategoryItem !== undefined) && (ite.item.real_path === $route.path) ? true : false"
          >
            {{ ite.item.name }}
          </cv-side-nav-menu-item>
        </cv-side-nav-menu>
      </cv-side-nav-items>
    </cv-side-nav>
    <cv-content id="#main-content">
      <nuxt />
      <footer-gr />
    </cv-content>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderGr from '@/components/HeaderGr.vue'
import FooterGr from '@/components/FooterGr.vue'

export default {
  components: {
    HeaderGr,
    FooterGr
  },
  computed: {
    ...mapState(['sitemap']),
    routerCheck () {
      return this.$nuxt.$route.path
    }
  },
  methods: {
    categoryGo () {
      this.$router.replace(this.slug)
    }
  }
}
</script>

<style lang='scss'>
@import "@/assets/styles/carbon.scss";
.bx--content {
  padding: 0;
}
</style>

<template>
  <div>
    <header-gr />
    <div class="a1-content">
      <!-- <cv-content id="#main-content"> -->
      <nuxt />
      <!-- </cv-content> -->
    </div>
    <footer-gr />
  </div>
</template>

<script>
import HeaderGr from '@/components/HeaderGr.vue'
import FooterGr from '@/components/FooterGr.vue'

export default {
  components: {
    HeaderGr,
    FooterGr
  }
}
</script>

<style lang='scss'>
@import "@/assets/styles/carbon.scss";
.a1-content {
  padding-top: 3rem;
}
.bx--content {
  padding: 0;
}
</style>

<template>
  <div>
    <header-gr />
    <cv-content id="#main-content">
      <nuxt />
      <footer-gr />
    </cv-content>
    <product-popup :data-visible="visible" />
    <modal-form />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderGr from '@/components/HeaderGr.vue'
import FooterGr from '@/components/FooterGr.vue'
import ProductPopup from '@/components/ProductPopup.vue'
import ModalForm from '@/components/modalForm.vue'

export default {
  components: {
    HeaderGr,
    FooterGr,
    ProductPopup,
    ModalForm
  },
  computed: {
    ...mapState('poductItem', ['visible'])
  }
}
</script>

<style lang='scss'>
@import "@/assets/styles/carbon.scss";
.bx--content {
  padding: 0;
}
.if-modal-open {
  overflow: hidden;
}
</style>

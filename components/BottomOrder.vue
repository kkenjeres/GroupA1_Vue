<template>
  <section class="bottom-order">
    <div class="bx--grid">
      <div class="bx--row">
        <div class="bx--col-md-16 bx--col-lg-16">
          <h1>Заказ</h1>
          <p class="order">
            Заполните форму обратной связи для заказа
          </p>
          <cv-button
            kind="tertiary"
            label="label"
            size="default"
            @click="CHANGE_MODAL_FORM()"
          >
            Заполнить форму
          </cv-button>
          <div class="call-info">
            <p>
              <a href="maitlo:info@group-a1.ru">info@group-a1.ru</a>
            </p>
            <p>
              <a href="tel:+7 (812) 416-31-09">+7 (812) 416-31-09</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations('poductItem', ['CHANGE_MODAL_FORM'])
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/carbon-utils.scss";
.bottom-order {
  padding-top: $layout-06;
  padding-bottom: $layout-06;

  p.order {
    padding-top: $spacing-06;
    padding-bottom: $spacing-09;
  }
  .call-info {
    padding-top: $spacing-09;
  }
}
</style>

<template>
  <section>
    <section
      class="deliver"
      :style="{ backgroundImage: 'url(' + require('@/assets/img/56.jpg') + ')' }"
    >
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-md-8 bx--col-lg-8">
            <h1>Доставка</h1>
          </div>
        </div>
      </div>
    </section>

    <section id="deliver-body">
      <div class="bx--grid deliver-space">
        <div class="bx--row">
          <div class="bx--col-md-4 bx--col-lg-4">
            <h2>Транспортный отдел</h2>
          </div>
          <div class="bx--col-md-12 bx--col-lg-12">
            <p>
              Транспортный отдел группы компаний разрабатывает индивидуальные транспортные маршруты для наших клиентов.
              Благодаря упорному труду наших сотрудников доставка становится более выгодной. Мы сотрудничаем с большинством
              транспортных компаний и готовы работать с абсолютно любим видом транспортировки.
            </p>

            <p>
              Мы имеем собственный транспорт, который позволяет бесплатно доставлять оборудования до транспортных компаний,
              или осуществлять доставку собственными силами в пределах Волгограда и Санкт-Петербурга.
            </p>
          </div>
        </div>
        <div class="bx--row pt-faq-1">
          <div class="bx--col-md-4 bx--col-lg-4">
            <h2>Расчёт стоимости</h2>
          </div>
          <div class="bx--col-md-12 bx--col-lg-12">
            <p>
              Мы сотрудничаем с известными компаниями, которые заслужили доверия на рынке грузоперевозок - ПЭК, Веста, MagicTrans,
              Деловые Линии, Кит (GTD).
            </p>
            <p>Срок выполнения заказа зависит от наличия оборудования на складе.</p>
            <p>Получите бесплатную консультацию при подборе медицинской техники от квалифицированных специалистов.</p>
            <!-- <p>{{ getName }}</p> -->
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  // computed: {
  //   getName () {
  //     return this.$store.getters.NAV_ITEM
  //   }
  // },
  head () {
    return {
      title: 'Доставка'
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/carbon-utils.scss";

.deliver {
  background-color: $ui-05;
  padding-top: $layout-07;
  padding-bottom: $layout-07;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;

  h1 {
    color: #ffffff;
  }
}
.deliver-space {
  padding-top: $layout-06;
  padding-bottom: $layout-06;
}

.pt-faq-1 {
  position: relative;
  padding-top: $layout-07;
  &:after {
    position: absolute;
    content: "";
    height: 1px;
    background-color: #242424;
    width: 100%;
    top: 5rem;
    left: 1rem;
  }
}
</style>

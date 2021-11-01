<template>
  <section class="footer">
    <div class="bx--grid footer">
      <div class="bx--row footer-space">
        <div class="bx--col-md-4 bx--col-lg-4">
          <h3 class="footer-heading">
            Исследуйте
          </h3>
          <cv-list>
            <cv-list-item>
              <cv-link>История А1</cv-link>
            </cv-list-item>
            <cv-list-item>
              <cv-link>Каталог запчастей</cv-link>
            </cv-list-item>
            <cv-list-item>
              <cv-link to="/products">
                Каталог Оборудования
              </cv-link>
            </cv-list-item>
            <cv-list-item>
              <cv-link>Каталог Расходников</cv-link>
            </cv-list-item>
            <cv-list-item>
              <cv-link to="services">
                Услуги и сервис
              </cv-link>
            </cv-list-item>
          </cv-list>
        </div>
        <div class="bx--col-md-4 bx--col-lg-4">
          <h3 class="footer-heading">
            Заказчикам
          </h3>
          <cv-list>
            <cv-list-item>
              <cv-link>Доставка</cv-link>
            </cv-list-item>
            <cv-list-item>
              <cv-link>Гарантия</cv-link>
            </cv-list-item>
            <cv-list-item>
              <cv-link>Поддержка</cv-link>
            </cv-list-item>
          </cv-list>
        </div>
        <div class="bx--col-md-4 bx--col-lg-4">
          <h3 class="footer-heading">
            О компании
          </h3>
          <cv-list>
            <cv-list-item>
              <cv-link>Контакты</cv-link>
            </cv-list-item>
            <cv-list-item>
              <cv-link>Партнёры</cv-link>
            </cv-list-item>
            <cv-list-item>
              <cv-link>Карьера</cv-link>
            </cv-list-item>
            <cv-list-item>
              <cv-link>Корпоративные принципы</cv-link>
            </cv-list-item>
            <cv-list-item>
              <cv-link>Новости А1</cv-link>
            </cv-list-item>
          </cv-list>
        </div>
        <div class="bx--col-md-4 bx--col-lg-4">
          <cv-dropdown placeholder="Русский">
            <cv-dropdown-item value="Русский">
              Русский
            </cv-dropdown-item>
            <cv-dropdown-item value="English">
              English
            </cv-dropdown-item>
          </cv-dropdown>
          <div class="footer-info">
            <cv-list>
              <cv-list-item>
                <cv-link href="tel: +7 (812) 416-31-09 ">
                  +7 (812) 416-31-09
                </cv-link>
              </cv-list-item>
              <cv-list-item>
                <cv-link href="mailto: info@group-a1.ru">
                  info@group-a1.ru
                </cv-link>
              </cv-list-item>
            </cv-list>
          </div>
        </div>
      </div>
      <div class="bx--row footer-space footer-space-copyrighting">
        <div class="bx--col-md-16 bx--col-lg-16">
          A1 - 2020. All rights reserved.
        </div>
        <div class="bx--offset-md-8 bx--col-md-4 bx--offset-lg-8 bx--col-lg-4" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/styles/carbon-utils.scss";
.footer {
  background-color: $ui-01;
  z-index: 3;

  .bx--dropdown-text {
    line-height: 2.5rem;
  }

  li {
    &::before {
      content: none !important;
    }
  }
  .footer-space {
    padding-top: $spacing-09;
  }
  .footer-info {
    padding-top: $spacing-09;
  }

  .footer-space-copyrighting {
    padding-top: $spacing-09;
    padding-bottom: $spacing-09;
    color: #0f62fe;
  }
  .footer-heading {
    margin-bottom: $spacing-06;
    @include carbon--type-style("heading-01");
  }
}
</style>

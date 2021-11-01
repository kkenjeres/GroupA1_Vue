<template>
  <section>
    <section class="header-wrapper">
      <section class="blur">
        <div class="video-container">
          <video id="myVideo" autoplay muted loop>
            <source
              src="https://dl.dropbox.com/s/rtt1at7wakrplxq/production%20ID_4114797.mp4?dl=0"
              type="video/mp4"
            >
          </video>
        </div>
      </section>
      <div class="bx--grid bx--grid-full-width">
        <div class="bx--row first-title">
          <div class="bx--col-lg-10">
            <h1>Медицинское оборудование</h1>
          </div>
          <div class="bx--col-lg-3 bx--no-gutter">
            <div class="bx--aspect-ratio bx--aspect-ratio--1x1">
              <div class="bx--aspect-ratio--object title-object">
                <h3>Антитела для патанатомии</h3>
                <ArrowRight32 />
              </div>
            </div>
          </div>
          <div class="bx--col-lg-3 bx--no-gutter">
            <div class="bx--aspect-ratio bx--aspect-ratio--1x1">
              <div class="bx--aspect-ratio--object title-object sec-obj">
                <h3>
                  Лабораторное оборудование
                  <br>и реагенты для науч ислелований
                </h3>
                <ArrowRight32 />
              </div>
            </div>
          </div>
        </div>

        <div class="bx--row">
          <div class="bx--col-lg-3 bx--offset-lg-10 bx--no-gutter">
            <div class="bx--aspect-ratio bx--aspect-ratio--1x1">
              <div class="bx--aspect-ratio--object title-object">
                <h3>Услуги и сервис</h3>
                <ArrowRight32 />
              </div>
            </div>
          </div>
          <div class="bx--col-lg-3 bx--no-gutter">
            <div class="bx--aspect-ratio bx--aspect-ratio--1x1">
              <div class="bx--aspect-ratio--object title-object sec-obj">
                <h3>Проточная цитология</h3>
                <ArrowRight32 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="bx--grid">
      <div class="bx--row">
        <div class="bx--col-lg-16 bx--col-md 16">
          <h1 class="cat-home-head">
            Найдите подходящие продукты и сервисы
          </h1>
        </div>
      </div>
      <div class="bx--row index_cat">
        <div class="bx--col-lg-8 bx--col-md-8">
          <h3 class="heading_index_cat">
            Продукция
          </h3>
          <cv-list>
            <cv-link v-for="(items, key) in sitemap" :key="key" :to="items.item.slug">
              <cv-list-item>{{ items.item.name }}</cv-list-item>
            </cv-link>
          </cv-list>
        </div>

        <div class="bx--col-lg-8 bx--col-md-8">
          <h3 class="heading_index_cat">
            Услуги
          </h3>
          <cv-list>
            <cv-link to="/services/support">
              <cv-list-item>Консалтинг</cv-list-item>
            </cv-link>
            <cv-link to="/services/assembly">
              <cv-list-item>Монтаж и пуско-наладка</cv-list-item>
            </cv-link>
            <cv-link to="/services/repair">
              <cv-list-item>Ремонт и обслуживание</cv-list-item>
            </cv-link>
            <cv-link to="/services/radiolab">
              <cv-list-item>Радиационный контроль</cv-list-item>
            </cv-link>
            <cv-link to="/services/xray">
              <cv-list-item>Проектирование рентгеновских кабинетов</cv-list-item>
            </cv-link>
            <cv-link to="/services/electrolab">
              <cv-list-item>Проверка заземления</cv-list-item>
            </cv-link>
            <cv-link to="/about">
              <cv-list-item>Испытаниие электроустановок рентгена</cv-list-item>
            </cv-link>
            <cv-link to="/about">
              <cv-list-item>Испытаниие электробезопасности рентгена</cv-list-item>
            </cv-link>
          </cv-list>
        </div>
      </diV>
    </div>

    <section class="block-card card-2">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-md-16 bx--col-lg-16">
            <h1>Услуги и сервисы</h1>
            <p>Предоставляем гарантии на выполняемые услуги</p>
            <p>
              <cv-link to="/contact">
                Исследовать каталог услуг>
              </cv-link>
            </p><p />
          </div>
        </div>
        <main-view
          :heading1="services[0].title"
          :link1="services[0].link"
          :bg-item1="services[0].img"
          :color1="services[0].colorChoose"
          :bg-color1="services[0].bgColor"
          :heading2="services[1].title"
          :link2="services[1].link"
          :bg-item2="services[1].img"
          :color2="services[1].colorChoose"
          :bg-color2="services[1].bgColor"
          :heading3="services[2].title"
          :link3="services[2].link"
          :bg-item3="services[2].img"
          :color3="services[2].colorChoose"
          :bg-color3="services[2].bgColor"
          :heading4="services[3].title"
          :link4="services[3].link"
          :bg-item4="services[3].img"
          :color4="services[3].colorChoose"
          :bg-color4="services[3].bgColor"
          :heading5="services[4].title"
          :link5="services[4].link"
          :bg-item5="services[4].img"
          :color5="services[4].colorChoose"
          :bg-color5="services[4].bgColor"
        />
      </div>
    </section>
    <section class="block-card">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-md-16 bx--col-lg-16">
            <h1>Передовые технологии медицины</h1>
            <p>Новинки каталога А1, доступные для включения в проект и отдельного заказа</p>
            <p>
              <cv-link to="/contact">
                Исследовать каталог оборудования>
              </cv-link>
            </p><p />
          </div>
        </div>
        <main-view
          :heading1="catalog[0].title"
          :link1="catalog[0].link"
          :bg-item1="catalog[0].img"
          :color1="catalog[0].colorChoose"
          :bg-color1="catalog[0].bgColor"
          :heading2="catalog[1].title"
          :link2="catalog[1].link"
          :bg-item2="catalog[1].img"
          :color2="catalog[1].colorChoose"
          :bg-color2="catalog[1].bgColor"
          :heading3="catalog[2].title"
          :link3="catalog[2].link"
          :bg-item3="catalog[2].img"
          :color3="catalog[2].colorChoose"
          :bg-color3="catalog[2].bgColor"
          :heading4="catalog[3].title"
          :link4="catalog[3].link"
          :bg-item4="catalog[3].img"
          :color4="catalog[3].colorChoose"
          :bg-color4="catalog[3].bgColor"
          :heading5="catalog[4].title"
          :link5="catalog[4].link"
          :bg-item5="catalog[4].img"
          :color5="catalog[4].colorChoose"
          :bg-color5="catalog[4].bgColor"
        />
      </div>
    </section>
    <Section id="body-search">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-md-8 bx--col-lg-8 ">
            <h2>Что ищете?</h2>
            <p>Найдите продукты, услуги и сервисы в инфраструктуре А1</p>
            <cv-search
              placeholder="Продукт, технология"
            />
          </div>
          <div class="bx--col-md-4 bx--col-lg-4 ">
            <!-- <cv-link to="/about">
              Исследовать полный каталог>
            </cv-link> -->
          </div>
          <div class="bx--col-md-4 bx--col-lg-4 ">
            <h2>Мы подскажем!</h2>
            <p><a href="tel:+7 (812) 416-31-09">+7 (812) 416-31-09</a><br><a href="mailto:info@group-a1.ru">info@group-a1.ru</a></p>
          </div>
        </div>
      </div>
    </Section>
    <section id="go-to-faq">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-md-16 bx--col-lg-16">
            <h2>FAQ</h2>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--col-md-4 bx--col-lg-4">
            <p>Сроки поствки?</p>
          </div>
          <div class="bx--col-md-4 bx--col-lg-4">
            <p>Как узнать цену?</p>
          </div>
          <div class="bx--col-md-4 bx--col-lg-4">
            <p>Сроки монтажных работ?</p>
          </div>
          <div class="bx--col-md-4 bx--col-lg-4">
            <p>Доставка в ЕАС</p>
          </div>
        </div>
        <div class="bx--row faq-go">
          <div class="bx--col-md-16 bx--col-lg-16">
            <p>
              <cv-link to="/faq">
                Другие частые вопросы >
              </cv-link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import MainView from '@/components/MainView.vue'
import Globe32 from '@/node_modules/@carbon/icons-vue/lib/globe/32'
import PersonFavorite32 from '@/node_modules/@carbon/icons-vue/lib/person--favorite/32'
import Application32 from '@/node_modules/@carbon/icons-vue/lib/application/32'
import ArrowRight32 from '@/node_modules/@carbon/icons-vue/es/arrow--right/32'

export default {
  components: { MainView, ArrowRight32 },
  asyncData (context) {
    return context.app.$storyapi
      .get('cdn/stories/homepage', {
        version: 'draft'
      })
      .then((res) => {
        return {
          catalog: res.data.story.content.body[0].Blok.map((fp) => {
            return {
              title: fp.Title,
              img: fp.Picture,
              link: fp.Link.url,
              colorChoose: fp.BlackOrWhite,
              bgColor: fp.ColorBackground
            }
          }),
          services: res.data.story.content.body[1].Blok.map((fp) => {
            return {
              title: fp.Title,
              img: fp.Picture,
              link: fp.Link.url,
              colorChoose: fp.BlackOrWhite,
              bgColor: fp.ColorBackground
            }
          })

        }
      })
  },
  created () {
    // Add icons to this
    Object.assign(this, {
      Globe32,
      PersonFavorite32,
      Application32
    })
  },
  computed: {
    ...mapState(['sitemap'])
  },
  // methods: {
  //   showMat () {
  //     console.log(this.catalog)
  //   }
  // },
  head () {
    return {
      title: 'Главная'
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/carbon-utils.scss";
.headpic{
    background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}

.help {
  position: relative;
}
#to_catalog {
  left: 16px;
}

.heading-info {
  position: relative;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center top;
    .bx--btn--tertiary {
    color: #ffffff;
    border-color: #ffffff;
    padding-right: 1rem;
    position: absolute;
    left: 0;
    bottom: 48px;
  }
}

.landing-page__heading {
  padding-top: $spacing-09 * 2;
  color: $text-04;
}
.landing-page-subheading {
  padding-top: $spacing-09;
  color: $text-04;
}
.landing-page__subheading {
  @include carbon--type-style("productive-heading-03");
  @include carbon--font-weight("semibold");
}
.landing-page__p {
  @include carbon--type-style("productive-heading-03");
  margin-top: $spacing-06;
  margin-bottom: $spacing-08;
  @include carbon--breakpoint-between((320px + 1), md) {
    max-width: 75%;
  }
}
.landing-page__label {
  @include carbon--type-style("heading-01");
}
.cat-home-head {
  padding-top: $layout-06;
}
.index_cat {
  div {
    position: relative;
    padding-left: 0;
  }
  h3 {
    padding-top: $layout-05;
    padding-bottom: $layout-01;
    padding-left: 1rem;
    &:after {
      position: absolute;
      content: "";
      height: 1px;
      background-color: #242424;
      width: 64px;
      top: 7rem;
      left: 1rem;
    }
  }
  a {
    &:hover {
      text-decoration: none;
    }
  }
  li {
    padding-left: 1rem;
    line-height: 3rem !important;
    @include carbon--type-style("heading-01");
    &:hover {
      background-color: $ui-05;
      color: #ffffff;
      cursor: pointer;
    }
    &::before {
      content: none !important;
    }
  }
}
.block-card{
  background-color: $ui-01;

  h1{
    padding-top: $layout-06;
  }
  p{
    padding-top: $layout-02;
  }
}
.card-2{
   padding-bottom: $spacing-09*3;
}

#body-search{
  .bx--row{
    padding-bottom: $layout-05;
  }
  h2{
    padding-top: $layout-05;
    padding-bottom: $layout-04;
  }
  p{
    padding-bottom: $layout-02;
  }
  a{
    padding-top: $layout-05;
  }
}

#go-to-faq{
  background-color: $ui-05;
  color: #ffffff;

  h2{
    padding-top: $layout-05;
    padding-bottom: $layout-02;
  }
  p{
    padding-bottom: $layout-02;
  }
}

.faq-go{
  padding-bottom: $layout-03;
}

.video-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.header-wrapper {
  overflow: hidden;
  position: relative;
  background: rgba(0, 0, 0, 0.7);
}

.first-title {
  h1 {
    display: block;
    color: white;
    padding-top: 1.5rem;
    z-index: 1;
    font-size: 5rem;
    line-height: 5rem;
  }
}

.title-object {
  border: 1px solid hsla(0, 0%, 100%, 0.3);
  border-top: none;
  color: white;
  &:hover {
    background: white;
    color: black;
    cursor: pointer;
    svg {
      fill: black;
    }
  }
  h3 {
    padding: 1.5rem;
    font-weight: 100;
    font-size: 1.5rem;
  }

  svg {
    position: absolute;
    fill: white;
    bottom: 1rem;
    right: 1rem;
  }
}

.sec-obj {
  border-left: none;
}

.main {
  overflow: hidden;
  position: relative;
}

#myVideo {
  position: absolute;
  left: 0;
  top: -300px;
  width: 100%;
  z-index: -1;
  object-fit: scale-down;
  object-position: bottom;
}
</style>

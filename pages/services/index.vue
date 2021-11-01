<template>
  <section>
    <section
      class="title"
      :style="{ backgroundImage: 'url(' + require('@/assets/img/53.jpg') + ')' }"
    >
      <div class="bx--grid">
        <div class="bx--row serv-title">
          <div class="bx--col-md-8 bx--col-lg-8">
            <h2>Каталог услуг</h2>
            <p>Группа компаний А1 поможет предотвратить проблемы и оптимизировать рабочие процессы в Вашей медицинской организации. Применим разумные технологии с пользой. Вместе.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="copula">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-lg-4">
            <h3>Поставка антител</h3>
          </div>
          <div class="bx--col-lg-4">
            <div class="bx--aspect-ratio bx--aspect-ratio--2x1">
              <div class="bx--aspect-ratio--object">
                <p>Диагностические антитела подходят как для ручного иммуногистохимического окрашивания, так и для окрашивания с использованием автоматизированных систем</p>
              </div>
            </div>

            <div class="button">
              <cv-button kind="secondary" size="size" label="label">
                Подробнее
              </cv-button>
            </div>
          </div>
          <div class="bx--col-lg-4">
            <img class="dna" src="@/assets/img/dna.svg">
          </div>
          <div class="bx--col-lg-4">
            <div class="bx--aspect-ratio bx--aspect-ratio--2x1">
              <div class="bx--aspect-ratio--object">
                <p>Системы молекулярно-генетической диагностики онкологических заболеваний</p>
              </div>
            </div>

            <cv-button kind="secondary" size="size" label="label">
              Подробнее
            </cv-button>
          </div>
        </div>
      </div>
    </section>

    <section
      class="labaratory"
      :style="{ backgroundImage: 'url(' + require('@/assets/img/52.jpg') + ')' }"
    >
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx- -col-md-4 bx--col-lg-4">
            <h3>Лабаратории</h3>
          </div>
          <div class="bx--col-md-12 bx--col-lg-12">
            <div class="bx--grid bx--grid--full">
              <div class="bx--row">
                <div
                  v-for="serv in services"
                  :key="serv.id"
                  class="bx--col-md-4 bx--col-lg-5 bx--no-gutter even-color"
                >
                  <div class="bx--aspect-ratio bx--aspect-ratio--2x1">
                    <div
                      class="bx--aspect-ratio--object"
                      :style="{ backgroundImage: 'url(' + serv.img + ')' }"
                    />
                  </div>
                  <div class="bx--aspect-ratio bx--aspect-ratio--4x3 service-describe">
                    <div class="bx--aspect-ratio--object">
                      <h4>{{ serv.title }}</h4>
                      <p>{{ serv.text }}</p>
                    </div>
                  </div>
                  <div class="continue">
                    <p>
                      <a @click.prevent="openService(serv.id)">Детально ></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="bx--grid">
      <div class="bx--row main-serv">
        <div class="bx--col-md-4 bx--col-lg-4">
          <h3>Основные услуги</h3>
        </div>
        <div class="bx--col-md-12 bx--col-lg-12">
          <div class="bx--grid bx--grid--full">
            <div class="bx--row">
              <div
                v-for="mServ in mainServices"
                :key="mServ.id"
                class="bx--col-md-4 bx--col-lg-5 bx--no-gutter main-service-describe"
              >
                <a @click.prevent="openService(mServ.id)">
                  <div
                    class="bx--aspect-ratio bx--aspect-ratio--2x1"
                    :style="{background: mServ.color}"
                  >
                    <div class="bx--aspect-ratio--object">
                      <p>{{ mServ.title }}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  asyncData (context) {
    return context.app.$storyapi
      .get('cdn/stories/services', {
        version: 'draft'
      })
      .then((res) => {
        return {
          services: res.data.story.content.body[0].GroupService.map((se) => {
            return {
              title: se.Title,
              img: se.Pic,
              text: se.Preview_text,
              id: se.Key
            }
          }),
          mainServices: res.data.story.content.body[1].GroupService.map((se) => {
            return {
              title: se.Title,
              color: se.Color,
              id: se.Key
            }
          })
        }
      })
  },
  methods: {
    openService (id) {
      this.$router.push('/services/' + id)
    }
  },
  head () {
    return {
      title: 'Услуги и сервис'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/carbon-utils.scss";

.dna {
  display: block;
  width: 30%;
  margin: 0 auto;
}

.button {
  width: 100%;
}

.labaratory {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: 50%;
  padding-bottom: 48px;
  h3 {
    color: white;
    padding: $spacing-09 0;
  }

  .continue {
    width: 100%;
    background-color: white;
    p {
      padding: $spacing-05;
      a {
        cursor: pointer;
      }
    }
  }

  .even-color:last-child .service-describe {
    background-color: $ui-01;
  }

  .even-color:last-child > .continue > p {
    background-color: $ui-01;
  }

  .service-describe {
    background: white;
    h4 {
      padding: 0 $spacing-05;
    }
    p {
      padding: $spacing-05;
    }
  }
}

.main-service-describe {
  .bx--aspect-ratio--2x1:hover {
    background-color: black !important;
    cursor: pointer;
  }
  p {
    padding: $spacing-05;
    color: white !important;
  }
}

.serv-title {
  padding-top: $layout-06;
  padding-bottom: $layout-06;
  color: white;

  p {
    font-size: 1.2rem;
    padding-top: $layout-02;
    font-weight: 100;
  }
}

.title {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}

.main-serv {
  padding-top: $layout-06;
  padding-bottom: $layout-06;
}

.copula {
  background: #161616;
  color: white;
  padding-top: $layout-06;
  padding-bottom: $layout-06;
}
</style>

<template>
  <div>
    <section class="head-about-us">
      <div class="bx--grid bx--grid--full-width">
        <div class="bx--row banner">
          <div class="bx--col-md-4 bx--col-lg-4">
            <h2>
              Повышая
              <br>качество
              <br>жизней
            </h2>
          </div>
          <div class="bx--col-md-4 bx--col-lg-4 head-card1">
            <h4>
              А1 верит в прогресс -
              <br>науку и технологии,
              <br>совершенствущие жизнь людей
            </h4>
          </div>
          <div class="bx--col-md-6 bx--col-lg-6 head-picture">
            <div class="bx--aspect-ratio bx--aspect-ratio--16x9">
              <div
                class="bx--aspect-ratio--object head-card2"
                :style="{ backgroundImage: 'url(' + require('@/assets/img/42.jpg') + ')' }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <div class="bx--grid bx--grid--full-width">
        <div class="bx--row about-heading">
          <div class="bx--col-lg-16">
            <h2>Группа компаний А1</h2>
          </div>
        </div>
        <div class="bx--row about-body">
          <cv-tabs selected="0">
            <cv-tab label="О компании">
              <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div class="bx--row about_tab-content">
                  <div class="bx--col-lg-4">
                    <img src="@/assets/img/38.jpg" alt>
                  </div>
                  <div class="bx--col-md-10 bx--col-lg-10">
                    <p>
                      Группа компаний А1 осуществляет свою деятельность на рынке поставок и обслуживания медицинского и научного оборудования, и расходных материалов, реагентов, проектирования, строительства и реконструкции лечебных учреждений с 2009 года.
                      Компания обладает опытом реализации крупных инфраструктурных проектов и в настоящее время обслуживает более 100 лечебно-профилактических, научных и образовательных учреждений Санкт-Петербурга, Волгоградской области, Ростовской области, Астраханской области, Ставропольского края, Карачаево-Черкесской республики, и республики Калмыкия, г. Грозный.
                      Каждый сотрудник группы компаний ценит заслуженное доверие наших Клиентов.
                    </p>
                  </div>
                </div>
              </div>
            </cv-tab>
            <cv-tab label="Команда">
              <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div class="bx--row about_tab-content">
                  <div class="bx--col-lg-4">
                    <img src="@/assets/img/43.jpg" alt>
                  </div>
                  <div class="bx--col-md-10 bx--col-lg-10">
                    <p>
                      В нашей команде присутствуют исключительно высококвалифицированные специалисты, с высшим инженерно-техническим образованием. Строгое соблюдение профессиональных компетенций, регламентов работы и корпоративной этики является нашей приоритетной целью.
                      Сотрудники регулярно проходят аттестации и курсы повышения квалификации. Именно эти принципы позволили нам накопить значительный опыт работы, получить долгосрочные договорные отношения с множеством медицинских, лечебных и оздоровительных учреждений и завершить множество трудоёмких и значимых проектов.
                    </p>
                  </div>
                </div>
              </div>
            </cv-tab>
            <cv-tab label="Поставки">
              <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div class="bx--row about_tab-content">
                  <div class="bx--col-lg-4">
                    <img src="@/assets/img/51.jpg" alt>
                  </div>
                  <div class="bx--col-lg-10">
                    <p>
                      На протяжении долгих лет мы взаимодействуем с огромным количеством отечественных и зарубежных заводов изготовителей и являемся их официальным дистрибьюторами.
                      Наша организация стремится оказать существенный вклад в развитие медицинских услуг не только в Российской Федерации, но и за рубежом. Являясь гарантом качества изготовителя поставляемого оборудования перед потребителем, мы бесплатно обучаем персонал работе на новом оборудовании, проводим технического обслуживание в рамках гарантийных обязательств и текущий ремонт.
                    </p>
                  </div>
                </div>
              </div>
            </cv-tab>
            <cv-tab label="Госзаказы">
              <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div class="bx--row about_tab-content">
                  <div class="bx--col-lg-16">
                    <p>
                      Окончательный переход на проведение открытых аукционов в электронной форме осуществлен с 1 января 2011 г. с распространением электронных торгов на региональные и муниципальные закупки.
                      Данные требования позволяют обеспечить поставку качественного оборудования и сократить риски, связанные с невыполнением обязательств по контракту поставщиками.
                      При проведении открытых аукционов в электронной форме группа компаний А1 обеспечивает максимальный высокий уровень качества поставляемой продукции или услуг. В разделе документация Вы можете подробнее ознакомиться с нормативной документацией и федеральными законами.
                    </p>
                  </div>
                </div>
              </div>
            </cv-tab>
          </cv-tabs>
        </div>
      </div>
    </section>
    <section id="partners">
      <div class="bx--grid bx--grid--full-width">
        <div class="bx--row about-heading">
          <div class="bx--col-lg-16">
            <h2>Партнёры</h2>
          </div>
        </div>
        <div class="bx--row logos">
          <div class="bx--col">
            <cv-tabs selected="0">
              <cv-tab label="Сервис">
                <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div class="bx--row about_tab-content">
                    <div class="bx--col-md-8 bx--col-lg-8">
                      <p>Любая техника, а также современное оборудование нуждаются в квалифицированном сервисном сопровождении. Медицинская техника и медоборудование – не исключение. Дорогостоящее техническое оснащение многих современных медицинских учреждений сложно быстро заменить в случае выхода из строя. Наиболее подходящий вариант – профилактическое сервисное обслуживание и своевременный ремонт, направленные на сохранение и восстановление функционирования медтехники, с целью обеспечения её продолжительной работы в будущем.</p>
                      <p>Группа компаний А-1 явлается официальным дистрибьютором фирм:</p>
                    </div>
                    <div class="bx--col-lg-4">
                      <p>
                        <ul>
                          <li>«MindRay»</li>
                          <li>«Pentax»</li>
                          <li>«Hitachi»</li>
                          <li>«Italray»</li>
                          <li>«Maquet»</li>
                          <li>«Shimadzu»</li>
                          <li>«Siemens»</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </cv-tab>
              <cv-tab label="Дистрибуция">
                <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div class="bx--row about_tab-content">
                    <div class="bx--col-lg-16">
                      Rapidly build beautiful and accessible experiences. The Carbon kit
                      contains all resources you need to get started.
                    </div>
                  </div>
                </div>
              </cv-tab>
            </cv-tabs>
          </div>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="bx--grid bx--grid--full-width">
        <div class="bx--row about-heading">
          <div class="bx--col-lg-16">
            <h2>Прочее</h2>
          </div>
        </div>
        <div class="bx--row about-body">
          <div class="bx--col-lg-2">
            <p>Лицензии</p>
          </div>
          <div class="bx--offset-lg-2 bx--col-lg-11">
            <cv-list>
              <cv-list-item>
                Лицензия на осуществление деятельности по техническому обслуживанию медицинской техники № 99-09-000090 от 27 марта 2007г
                выданной Федеральной Службой по Надзору в Сфере Здравоохранения и Социального Развития РФ;
              </cv-list-item>
              <cv-list-item>
                Лицензия №77.99.15.002.Л.000098.12.13 от 16.12.2013 г. на осуществление деятельности в области использования источников
                ионизирующего излучения (генерирующих) выданной Федеральной Службой по Надзору в Сфере Защиты Прав Потребителей и Благополучия Человека;
              </cv-list-item>
              <cv-list-item>
                Лицензия на осуществление фармацевтической деятельности № 99-02-013912 от 23 ноября 2007г ., выданной Федеральной Службой по Надзору
                в Сфере Здравоохранения и Социального Развития РФ;
              </cv-list-item>
              <cv-list-item>Аттестат аккредитации № РОСС RU.0001.21МН38 от 16.07.2014 г., выданной Федеральной службой по аккредитации (Росаккредитация).</cv-list-item>
            </cv-list>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: 'О нас'
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/carbon-utils.scss";
@import "@/assets/styles/mixins.scss";

.about_tab-content {
  padding-top: $layout-06;
  padding-bottom: $layout-06;

  img {
    position: relative;
    width: 90%;
  }
}

.head-picture {
  padding: 0;
}

.head-about-us {
  background-color: $ui-05;
  .banner {
    color: white;
  }
  .head-card1 {
    background-color: #002d9c;
  }
  .head-card2 {
    background-color: #0f62fe;
  }
  h2 {
    padding-top: $spacing-09 * 2;
  }
  h4 {
    padding-top: $spacing-09 * 2;
  }
}

.about-heading {
  padding-top: $layout-05;
  padding-bottom: $layout-04;
}

#about {
  p {
    padding-bottom: $spacing-05;
  }

  .about-body {
    padding-bottom: $layout-05;
  }
  li {
    padding-bottom: $spacing-05;
  }
}

#partners {
  background-color: $ui-01;
  .logos {
    padding-bottom: $layout-06;
  }
}
</style>

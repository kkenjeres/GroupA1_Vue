<template>
  <section>
    <section
      class="contact"
      :style="{
        backgroundImage: 'url(' + require('@/assets/img/55.jpg') + ')',
      }"
    >
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-md-8 bx--col-lg-8">
            <h1>Contactss for kris</h1>
          </div>
        </div>
      </div>
    </section>
    <section id="form">
      <div class="bx--grid">
        <div class="bx--row">
          <div class="bx--col-md-8 bx--col-lg-8">
            <h3>Связаться с нами</h3>
            <p>
              Свяжитесь нами по телефону
              <cv-link href="tel: +7 (812) 416-31-09">
                +7 (812) 416-31-09 </cv-link
              >или заполните форму
            </p>
            <cv-form>
              <cv-text-input label="Имя" placeholder="Введите имя" />
              <cv-text-input
                label="Электронная почта"
                placeholder="Введите адрес электронной почты"
              />
              <cv-text-area
                label="Сообщение"
                placeholder="Введите текст сообщения"
              />
              <cv-select label="Тема сообщения">
                <cv-select-option disabled selected hidden>
                  Выбрать тему
                </cv-select-option>
                <cv-select-optgroup label="Category 1">
                  <cv-select-option value="cv-select-option1">
                    cv-select-option 1
                  </cv-select-option>
                  <cv-select-option value="cv-select-option2">
                    cv-select-option 2
                  </cv-select-option>
                </cv-select-optgroup>
                <cv-select-optgroup label="Category 2">
                  <cv-select-option value="cv-select-option3">
                    cv-select-option 3
                  </cv-select-option>
                  <cv-select-option value="cv-select-option4">
                    cv-select-option 4
                  </cv-select-option>
                </cv-select-optgroup>
              </cv-select>
              <cv-button>Отправить</cv-button>
            </cv-form>
          </div>
          <div
            class="bx--col-md-6 bx--offset-md-2 bx--col-lg-6 bx--offset-lg-2"
          >
            <h3>Контакты</h3>
            <p>
              Россия, 196620, г. Санкт-Петербург, г. Павловск,
              <br />ул. Нахимсона, д. 8
            </p>
            <p>
              mail:
              <a href="mailto: info@group-a1.ru">info@group-a1.ru</a>
            </p>
            <p>
              тел.:
              <a href="tel: +7 (812) 416-31-09 ">+7 (812) 416-31-09</a>
            </p>

            <h3>Нужна помощь?</h3>
            <p>
              В разделе FAQ вы найдете ответы на
              <br />часто задаваемые вопросы
            </p>
            <cv-link to="/faq"> FAQ > </cv-link>
          </div>
        </div>
      </div>
    </section>
    <section>
      <!-- <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A8f057f9961cf750e07e92ec62a98b50b2068fa70df23a31c95715b87821ed782&amp;source=constructor"
        width="100%"
        height="720"
        frameborder="0"
      />-->
    </section>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Контакты'
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/carbon-utils.scss";

.contact {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  h1 {
    color: #ffffff;
    padding-top: $layout-07;
    padding-bottom: $layout-07;
  }
}

#form {
  h3 {
    padding-top: $layout-06;
    padding-bottom: $layout-02;
  }
  p {
    padding-bottom: $layout-01;
  }
  .bx--btn {
    margin-top: $layout-03;
    margin-bottom: $layout-06;
  }

  label {
    margin-top: $layout-03;
  }
}

.head-pic {
  background-size: cover;
}

.map {
  padding: 0 !important;
}
</style>

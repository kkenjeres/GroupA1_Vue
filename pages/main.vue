<template>
  <section class="main">
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
                <h3>Жидкостная цитология</h3>
                <ArrowRight32 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import ArrowRight32 from '@/node_modules/@carbon/icons-vue/es/arrow--right/32'

export default {
  components: {
    ArrowRight32
  }

}
</script>

<style lang="scss" scoped>
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

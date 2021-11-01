<template>
  <div class="ratio_serv_prod">
    <div class="bx--row bx--no-gutter">
      <div class="bx--col-md-8 bx--col-lg-8">
        <div class="bx--aspect-ratio bx--aspect-ratio--2x1">
          <div
            class="bx--aspect-ratio--object mw-bg"
            :style="{ background: bgColor1 + ' url(' +bgItem1+ ')' }"
          >
            <h2 :style="{ color: color1 ? black : white }">
              {{ heading1 }}
            </h2>
            <ArrowRight32 :style="{ fill: color1 ? black : white }" />
          </div>
        </div>
      </div>
      <div class="bx--col-md-8 bx--col-lg-8">
        <div class="bx--aspect-ratio bx--aspect-ratio--2x1">
          <div
            class="bx--aspect-ratio--object mw-bg"
            :style="{ background: bgColor2 + ' url(' +bgItem2 + ')' }"
          >
            <h2 :style="{ color: color2 ? black : white }">
              {{ heading2 }}
            </h2>
            <ArrowRight32 :style="{ fill: color2 ? black : white }" />
          </div>
        </div>
      </div>
    </div>
    <div class="bx--row bx--no-gutter">
      <div class="bx--col-md-8 bx--col-lg-8">
        <div class="bx--aspect-ratio bx--aspect-ratio--2x1">
          <div
            class="bx--aspect-ratio--object mw-bg"
            :style="{ background: bgColor3 +' url(' + bgItem3 + ')' }"
          >
            <h2 :style="{ color: color3 ? black : white }">
              {{ heading3 }}
            </h2>
            <ArrowRight32 :style="{ fill: color3 ? black : white }" />
          </div>
        </div>
      </div>
      <div class="bx--col-md-4 bx--col-lg-4">
        <div class="bx--aspect-ratio bx--aspect-ratio--1x1">
          <div
            class="bx--aspect-ratio--object mw-bg"
            :style=" { background: bgColor4 +' url(' + bgItem4 + ')'}"
          >
            <h3 :style="{ color: color4 ? black : white }">
              {{ heading4 }}
            </h3>
            <ArrowRight32 :style="{ fill: color4 ? black : white }" />
          </div>
        </div>
      </div>
      <div class="bx--col-md-4 bx--col-lg-4">
        <div class="bx--aspect-ratio bx--aspect-ratio--1x1">
          <div
            class="bx--aspect-ratio--object mw-bg"
            :style=" { background: bgColor5 + ' url(' + bgItem5 + ')'}"
          >
            <h3 :style="{ color: color5 ? black : white }">
              {{ heading5 }}
            </h3>
            <ArrowRight32 :style="{ fill: color5 ? black : white }" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowRight32 from '@/node_modules/@carbon/icons-vue/es/arrow--right/32'

export default {
  components: {
    ArrowRight32
  },
  props: {
    heading1: String,
    heading2: String,
    heading3: String,
    heading4: String,
    heading5: String,
    bgItem1: String,
    bgItem2: String,
    bgItem3: String,
    bgItem4: String,
    bgItem5: String,
    link1: String,
    link2: String,
    link3: String,
    link4: String,
    link5: String,
    bgColor1: String,
    bgColor2: String,
    bgColor3: String,
    bgColor4: String,
    bgColor5: String,
    color1: Boolean,
    color2: Boolean,
    color3: Boolean,
    color4: Boolean,
    color5: Boolean
  },
  data () {
    return {
      white: 'white',
      black: 'black'
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/assets/styles/carbon-utils.scss";
.ratio_serv_prod {
  .bx--aspect-ratio {
    position: relative;
  }
  .bx--btn--tertiary {
    padding-right: 1rem;
    position: absolute;
    left: 16px;
    bottom: 48px;
  }
  .bx--btn--tertiary:hover {
    border-color: white !important;
    color: white !important;
  }

  .mw-bg {
    background-size: cover !important;
    &:hover {
      cursor: pointer;
      background: #001141 !important;
      h3 {
        color: white !important;
      }
      h2 {
        color: white !important;
      }
      svg {
        fill: white !important;
      }
    }
    svg {
      position: absolute;
      fill: white;
      bottom: 1rem;
      right: 1rem;
    }
  }

  h2 {
    padding-top: $spacing-09 * 2;
    padding-left: $layout-01;
    margin-right: $spacing-09 * 4;
    color: #ffffff;
  }

  h3 {
    padding-top: $spacing-09;
    padding-left: $layout-01;
    margin-right: $spacing-09;
    color: #ffffff;
  }
}
</style>

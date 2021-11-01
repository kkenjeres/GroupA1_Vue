<template>
  <div v-if="visible" class="new">
    <div class="close">
      <Close32 :style="{ fill: white }" @click="CHANGE_MODAL()" />
    </div>

    <div class="bx--grid bx--grid--full-width image-gallery-hw">
      <div class="bx--row image-gallery-h">
        <div
          class="bx--col-lg-3 bx bx--col-md-4 ImageGallery-module--nav-buttons ImageGallery-module--left-nav"
          @click="SET_PREV_ITEM()"
        >
          <ChevronLeft32 :style="{ fill: white }" />
        </div>

        <div class="bx--col-lg-10 bx--col-md-8 ImageGallery-module--image">
          <img
            v-if="this.visibleStartItem === 1 ? true : false"
            :src="itemObject.img1"
          >
          <img
            v-if="this.visibleStartItem === 2 ? true : false"
            :src="itemObject.img2"
          >
          <img
            v-if="this.visibleStartItem === 3 ? true : false"
            :src="itemObject.img3"
          >
        </div>

        <div
          class="bx--col-lg-3 bx bx--col-md-4 ImageGallery-module--nav-buttons ImageGallery-module--right-nav"
          @click="SET_NEXT_ITEM()"
        >
          <ChevronRight32 :style="{ fill: white }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ChevronLeft32 from '@/node_modules/@carbon/icons-vue/es/chevron--left/32'
import ChevronRight32 from '@/node_modules/@carbon/icons-vue/es/chevron--right/32'
import Close32 from '@/node_modules/@carbon/icons-vue/es/close/32'
export default {
  components: { ChevronLeft32, ChevronRight32, Close32 },
  data () {
    return {
      white: 'white'
    }
  },
  watch: {
    visible () {
      if (this.visible) {
        this.show()
      } else {
        this.hide()
      }
    }
  },
  computed: {
    ...mapState('poductItem', ['visible']),
    ...mapState('poductItem', ['visibleStartItem']),
    ...mapState('poductItem', ['itemObject'])
  },
  methods: {
    ...mapMutations('poductItem', ['CHANGE_MODAL']),
    ...mapMutations('poductItem', ['SET_PREV_ITEM']),
    ...mapMutations('poductItem', ['SET_NEXT_ITEM']),

    show () {
      // prevent body scrolling
      document.body.classList.add('bx--body--with-modal-open')
    },
    hide () {
      // restore any previous scrollability
      document.body.classList.remove('bx--body--with-modal-open')
    }
  }
}
</script>

<style lang="scss" >
.close {
  position: absolute;
  top: 64px;
  right: 32px;
  z-index: 100;
}

.ImageGallery-module--nav-buttons {
  height: 100%;
  width: 100%;
  outline: none;
  background: none;
  border: none;
  padding: 0;
  z-index: 1;
  cursor: pointer;
}

.ImageGallery-module--left-nav {
  display: flex !important;
  justify-content: flex-start;
  align-items: center;
}
.ImageGallery-module--right-nav {
  display: flex !important;
  justify-content: flex-end;
  align-items: center;
}

.ImageGallery-module--image {
  display: flex !important;
  width: 100% !important;
  height: 100%;
  align-items: center;
  justify-content: center;
  -webkit-user-select: none;
  user-select: none;
  img {
    width: 75%;
  }
}
.new {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  content: "";
  background: rgba(0, 0, 0, 0.9);
  .image-gallery-hw {
    height: 100%;
    width: 100%;
  }
  .image-gallery-h {
    height: 100%;
  }
}
.bx--body--with-modal-open {
  overflow-y: hidden !important;
}
</style>

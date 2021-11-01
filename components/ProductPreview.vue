<template>
  <div class="bx--col-md-4 bx--col-lg-4">
    <a href="#" @click.prevent="openProduct">
      <div class="bx--aspect-ratio bx--aspect-ratio--1x1">
        <div
          class="bx--aspect-ratio--object bg-item"
          :style="{ backgroundImage: 'url('+ previewImage +')' }"
        />
      </div>
    </a>
    <div class="bx--aspect-ratio bx--aspect-ratio--2x1">
      <div class="bx--aspect-ratio--object field-bottom-product">
        <h4>{{ title }}</h4>
        <p class="creator">
          {{ manufactur }}
        </p>
        <a v-if="expendable" @click="openExpendable">Расходные материалы</a>
        <br>
        <a v-if="spareParts" @click="openSpareParts">Запчасти</a>
        <p>{{ description }}</p>
      </div>
    </div>

    <div class="button-product">
      <cv-button kind="primary" label="label" size="small">
        Запросить КП
      </cv-button>
      <cv-button kind="tertiary" label="label" size="small" @click.prevent="openProduct">
        Подробнее
      </cv-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    description: String,
    previewImage: String,
    manufactur: String,
    slug: String,
    expendable: {
      type: Boolean,
      default: false
    },
    spareParts: {
      type: Boolean,
      default: false
    },
    parentSl: Number
  },
  methods: {
    openProduct () {
      this.$router.push(this.slug)
    },
    // showSlug () {
    //   console.log(this.slug)
    //   console.log(this.$nuxt.$route.path)
    // },
    openExpendable () {
      if (this.$nuxt.$route.params.categoryItem === undefined && this.$nuxt.$route.params.subcategoryItem === undefined) {
        this.$router.push({ path: 'products/' + this.slug.replace(this.id, '').replace('products/', '').replace(/\/.*/, '') + '/rashodnye-materialy', query: { materialsEquipment: this.title } })
      } else if (this.$nuxt.$route.params.categoryItem && this.$nuxt.$route.params.subcategoryItem === undefined) {
        this.$router.push({ path: this.slug.replace(this.id, '').replace('products/', '').replace(/\/.*/, '') + '/rashodnye-materialy', query: { materialsEquipment: this.title } })
      } else if (this.$nuxt.$route.params.categoryItem !== undefined && this.$nuxt.$route.params.subcategoryItem !== undefined) {
        this.$router.push({ path: '/products/' + this.$nuxt.$route.params.categoryItem + '/rashodnye-materialy', query: { materialsEquipment: this.title } })
      }
    },
    openSpareParts () {
      if (this.$nuxt.$route.params.categoryItem === undefined && this.$nuxt.$route.params.subcategoryItem === undefined) {
        this.$router.push({ path: 'products/' + this.slug.replace(this.id, '').replace('products/', '').replace(/\/.*/, '') + '/spare-parts', query: { materialsSpareParts: this.title } })
      } else if (this.$nuxt.$route.params.categoryItem && this.$nuxt.$route.params.subcategoryItem === undefined) {
        this.$router.push({ path: this.slug.replace(this.id, '').replace('products/', '').replace(/\/.*/, '') + '/spare-parts', query: { materialsSpareParts: this.title } })
      } else if (this.$nuxt.$route.params.categoryItem !== undefined && this.$nuxt.$route.params.subcategoryItem !== undefined) {
        this.$router.push({ path: '/products/' + this.$nuxt.$route.params.categoryItem + '/spare-parts', query: { materialsSpareParts: this.title } })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/carbon-utils.scss";

.field-bottom-product {
  overflow: hidden;

  a {
    margin-left: $spacing-05;
    cursor: pointer;
  }

  h4 {
    padding-top: $spacing-05;
    padding-left: $spacing-05;
    padding-right: $spacing-05;
    color: black !important;
  }
  p {
    padding-top: $spacing-05;
    padding-left: $spacing-05;
    padding-right: $spacing-05;
    color: black !important;
  }

  .creator {
    padding-top: $spacing-02;
    font-size: 0.8rem;
  }
}
.bg-item {
  background-size: cover;
}

.button-product {
  margin-bottom: $layout-02;
}
</style>

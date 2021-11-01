<template>
  <section>
    <div class="bx--grid">
      <section class="product-header">
        <div class="bx--row">
          <div class="bx--col-md-13 bx--col-lg-13">
            <h3>
              {{ breadcrumb[0] }}
              <span
                v-if=" $route.query.manufactur !== undefined"
              >{{ $route.query.manufactur }}</span>
            </h3>
            <cv-breadcrumb :aria-label="ariaLabel">
              <cv-breadcrumb-item>
                <cv-link to="/">
                  Главная
                </cv-link>
              </cv-breadcrumb-item>
              <cv-breadcrumb-item>
                <cv-link to="/products">
                  Каталог
                </cv-link>
              </cv-breadcrumb-item>
              <cv-breadcrumb-item>
                <cv-link :to="breadcrumb[2]">
                  {{ breadcrumb[1] }}
                </cv-link>
              </cv-breadcrumb-item>
              <cv-breadcrumb-item>
                <cv-link aria-current="page">
                  {{ breadcrumb[0] }}
                </cv-link>
              </cv-breadcrumb-item>
            </cv-breadcrumb>
          </div>
          <div class="bx--col-md-3 bx--col-lg-3">
            <cv-dropdown v-model="select" placeholder="Производитель">
              <nuxt-link
                v-for="tag in tags.data.tags"
                :key="tag.name"
                :to="{ path: $route.params.path, query: { manufactur: tag.name }}"
              >
                <cv-dropdown-item :value="tag.name">
                  {{ tag.name }}
                </cv-dropdown-item>
              </nuxt-link>
            </cv-dropdown>
          </div>
        </div>
      </section>
      <div class="bx--row">
        <div class="bx--col-md-16 bx--col-lg-16 pagination-product">
          <cv-pagination
            :backward-text="'Слеующая страница'"
            :forward-text="'Предыдущая страница'"
            :page-number-label="String(perPage[0])"
            :page-sizes-label="'Кол-во записей на странице'"
            :number-of-items="perPage[1]"
            :page-sizes="perPageSize"
            @change="onChange"
          >
            <template
              v-slot:range-text="{scope}"
            >
              {{ scope.start }} - {{ scope.end }} из {{ scope.items }} записей
            </template>
            <template v-slot:of-n-pages="{scope}">
              из {{ scope.pages }} страниц
            </template>
          </cv-pagination>
        </div>
      </div>
      <div class="bx--row">
        <product-preview
          v-for="product in products"
          :id="product.id"
          :key="product.id"
          :title="product.title"
          :description="product.description"
          :preview-image="product.img"
          :manufactur="product.creator"
          :slug="product.slug.replace('products/'+ $nuxt.$route.params.categoryItem + '/', '')"
          :expendable="product.expendableMaterials"
          :spare-parts="product.spareParts"
          :parent-sl="product.parentSlug"
        />
      </div>
      <div class="bx--row">
        <div class="bx--col-md-16 bx--col-lg-16 pagination-product">
          <cv-pagination
            :backward-text="'Слеующая страница'"
            :forward-text="'Предыдущая страница'"
            :page-number-label="String(perPage[0])"
            :page-sizes-label="'Кол-во записей на странице'"
            :number-of-items="perPage[1]"
            :page-sizes="perPageSize"
          >
            <template
              v-slot:range-text="{scope}"
            >
              {{ scope.start }} - {{ scope.end }} из {{ scope.items }} записей
            </template>
            <template v-slot:of-n-pages="{scope}">
              из {{ scope.pages }} страниц
            </template>
          </cv-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import ProductPreview from '@/components/ProductPreview.vue'

export default {
  watchQuery: true,
  components: { ProductPreview },
  async fetch  ({ store, params }) {
    await store.dispatch('productFilter/loadProductsTags', { tagsPoint: 'products/' + params.categoryItem + '/' + params.subcategoryItem + '/' })
  },
  async asyncData ({ store, params, query, error }) {
    try {
      await store.dispatch('productFilter/loadAllProducts', { startWith: 'products/' + params.categoryItem + '/' + params.subcategoryItem + '/', withTag: query.manufactur, spare: query.materialsSpareParts ? query.materialsSpareParts : undefined, expedable: query.materialsEquipment ? query.materialsEquipment : undefined, perOnePage: query.per, pageNumber: query.page })
    } catch (er) {
      error({ statusCode: 404 })
    }
  },
  data () {
    return {
      paginator: false,
      perOnePage: '',
      pageNumber: '',
      perPageSize: [10, { value: 20, selected: true }, 30]
    }
  },
  layout: 'product',
  computed: {
    ...mapState('productFilter', ['products']),
    ...mapState('productFilter', ['tags']),
    ...mapState('productFilter', ['perPage']),
    breadcrumb () {
      let item = ''
      let parentItemId = ''
      let parentItem = ''
      let parentLink = ''
      for (const key in this.$store.state.sitemap) {
        for (const pKey in this.$store.state.sitemap[key].children) {
          if (this.$store.state.sitemap[key].children[pKey].item.real_path === this.$route.path) {
            item = this.$store.state.sitemap[key].children[pKey].item.name
            parentItemId = this.$store.state.sitemap[key].children[pKey].item.parent_id
          }
        }
      }
      parentItem = this.$store.state.sitemap[parentItemId].item.name
      parentLink = this.$store.state.sitemap[parentItemId].item.real_path
      return [item, parentItem, parentLink]
    }
  },
  methods: {
    onChange (advice) {
      // при инициализации страницы срабатывает срабатывает метод @change
      // кусок не даёт переходить сразу к следующему query
      if (this.$store.state.productFilter.paginator === false) {
        this.$store.commit('productFilter/SET_PAGINATION')
        this.$store.commit('productFilter/COUNT_PAGINATION')
      } else if (this.$store.state.productFilter.paginator === true && this.$store.state.productFilter.countPaginator >= 1) {
        this.perOnePage = advice.length
        this.pageNumber = advice.page
        this.$router.push({ path: this.$nuxt.$route.path, query: { page: this.pageNumber, per: this.perOnePage } })
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('productFilter/SWITCH_PAGINATION')
    this.$store.commit('productFilter/DECOUNT_PAGINATION')
    next()
  },
  head () {
    return {
      title: this.breadcrumb[0]
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/carbon-utils.scss";

.pagination-product {
  margin-bottom: $layout-02;
}

.product-header {
  padding-top: $layout-04;
  padding-bottom: $layout-04;
}
</style>

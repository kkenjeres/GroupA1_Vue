export const state = () => ({
  products: [],
  perPage: [],
  start_with: {},
  manufactur_filter: '',
  tags: {},
  select: '',
  resp: {},
  paginator: false,
  countPaginator: 0
})

export const mutations = {
  SET_PRODUCTS (state, item) {
    state.products = item
  },
  SET_POINT (state, point) {
    state.start_with = point
  },
  SET_TAGS (state, tags) {
    state.tags = tags
  },
  SET_SELECT (state, select) {
    state.select = select
  },
  SET_RESP (state, resp) {
    state.resp = resp
  },
  SET_ITEM_PAGE (state, perPage) {
    state.perPage = perPage
  },
  SET_PAGINATION (state) {
    state.paginator = true
  },
  COUNT_PAGINATION (state) {
    state.countPaginator = 1
  },
  DECOUNT_PAGINATION (state) {
    state.countPaginator = 0
  },
  SWITCH_PAGINATION (state) {
    state.paginator = false
  }
}

export const actions = {
  async loadAllProducts ({ commit }, { startWith, withTag, spare, expedable, perOnePage, pageNumber }) {
    const resp = await this.$storyapi.get('cdn/stories', { version: 'published', per_page: perOnePage, page: pageNumber, starts_with: startWith, with_tag: withTag, filter_query: { Manufactur: { like: expedable !== undefined ? expedable : spare !== undefined ? spare : undefined } } })

    const respMap = resp.data.stories.map((bp) => {
      return {
        id: bp.slug,
        title: bp.content.Title,
        description: bp.content.DescriptionPreview,
        img: bp.content.OverviewImg,
        creator: bp.content.Manufactur,
        slug: bp.full_slug,
        expendableMaterials: bp.content.expendableMaterials,
        spareParts: bp.content.spareParts,
        parentSlug: bp.parent_id
      }
    })
    const perPage = [resp.perPage, resp.total]

    commit('SET_PRODUCTS', respMap)
    commit('SET_POINT', startWith)
    commit('SET_RESP', resp)
    commit('SET_ITEM_PAGE', perPage)
  },
  async loadProductsTags ({ commit }, { tagsPoint }) {
    const resp = await this.$storyapi.get('cdn/tags', { starts_with: tagsPoint })

    commit('SET_TAGS', resp)
  }

}

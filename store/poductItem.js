export const state = () => ({
  visible: false,
  visibleStartItem: '',
  itemObject: {},
  endpoint: '',
  modalFormVisible: false,
  error: ''
})

export const mutations = {
  CHANGE_MODAL (state, startItem) {
    state.visible = !state.visible
    state.visibleStartItem = startItem
  },
  SET_NEXT_ITEM (state) {
    if (state.visibleStartItem >= 1 && state.visibleStartItem < 3) {
      state.visibleStartItem++
    } else if (state.visibleStartItem === 3) {
      state.visibleStartItem = 1
    }
  },
  SET_PREV_ITEM (state) {
    if (state.visibleStartItem !== 1 && state.visibleStartItem <= 3) {
      state.visibleStartItem--
    } else if (state.visibleStartItem === 1) {
      state.visibleStartItem = 3
    }
  },
  ITEM_OBJECT (state, itemObject) {
    state.itemObject = itemObject
  },
  SET_ENDPOINT (state, endpoint) {
    state.endpoint = endpoint
  },
  CHANGE_MODAL_FORM (state) {
    state.modalFormVisible = true
  },
  CLOSE_MODAL_FORM (state) {
    state.modalFormVisible = false
  },
  SET_ERROR (state, payload) {
    state.error = payload
  }

}

export const actions = {
  OPEN_MODAL ({ commit }) {
    commit('CHANGE_MODAL')
  },
  async loadProductItem ({ commit }, { itemPath }) {
    const resp = await this.$storyapi.get('cdn/stories' + itemPath, { version: 'published' })
    const itemObject = {
      image: resp.data.story.content.Img,
      title: resp.data.story.content.Title,
      // content: resp.data.story.content.FullText,
      manufatcur: resp.data.story.content.Manufactur,
      description: resp.data.story.content.DescriptionRich,
      features: resp.data.story.content.FeaturesRich,
      img1: resp.data.story.content.ImgFullSize_1,
      img2: resp.data.story.content.ImgFullSize2,
      img3: resp.data.story.content.ImgFullSize3,
      charact: resp.data.story.content.CharactRich
    }
    commit('ITEM_OBJECT', itemObject)
    commit('SET_ENDPOINT', itemPath)
  }
}

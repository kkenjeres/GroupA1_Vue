export const state = () => ({
  sitemap: [],
  links: {}
})

export const mutations = {
  SET_SITEMAP (state, links) {
    const generateTree = (parent, items) => {
      const node = {}
      if (typeof items[parent] !== 'undefined') {
        items[parent].forEach((item) => {
          node[item.id] = {
            item,
            children: generateTree(item.id, items)
          }
        })
      }
      return node
    }

    const items = {}
    Object.keys(links).forEach((key) => {
      const item = links[key]
      if (typeof items[item.parent_id] === 'undefined') { items[item.parent_id] = [] }
      items[item.parent_id].push(item)
    })

    state.sitemap = generateTree(Object.keys(items)[0], items)
    state.links = links
  }
}
export const actions = {
  nuxtServerInit ({ commit, state }) {
    if (Object.keys(state.links).length === 0) {
      return this.$storyapi.get('cdn/links', { starts_with: 'products/' }).then((res) => { commit('SET_SITEMAP', res.data.links) })
    }
  }
}

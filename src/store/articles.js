export const state = () => ({
  articles: null
})

export const mutations = {
  get(state, articles) {
    state.articles = articles
  }
}
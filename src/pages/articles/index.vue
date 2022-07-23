<template>
  <PagesArticles />
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: `blogs`,
    });
    return { articles: data.contents };
  },
  mounted() {
    this.$store.commit('articles/get', this.articles)
  },
}
</script>
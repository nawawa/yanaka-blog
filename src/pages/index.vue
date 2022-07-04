<template>
  <div>
    <h1 style="text-align: center;">新着記事</h1>
    <LayoutsArticleIndexCard :articles="articles" />
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: `blogs`,
      queries: {limit: 6}
    });
    return { articles: data.contents };
  },
}
</script>

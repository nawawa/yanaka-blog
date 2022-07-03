<template>
  <div>
    <h1>新着記事一覧</h1>
    <LayoutsArticleListCard :articles="articles" />
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: `blogs`,
    });
    return { articles: data.contents };
  },
}
</script>
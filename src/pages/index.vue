<template>
  <UITopContainer>
    <UIHeading>
      新着記事
    </UIHeading>

    <LayoutsArticleIndexCard :articles="articles" />

    <UIHeading>
      <UIStyledNuxtLink :link="`/articles`">
        ぜんぶ読む
      </UIStyledNuxtLink>
    </UIHeading>
  </UITopContainer>
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

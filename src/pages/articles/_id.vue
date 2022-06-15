<template>
  <article>
    <LayoutsArticleHeader 
      :authors="authors" 
      :eyecatch_url="eyecatch_url" 
      :title="article.title"
    />
    <div v-html='article'></div>
    <aside>
      <!-- TODO:シェアとか -->
    </aside>
  </article>
</template>

<script>
export default {
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: `blogs/${params.id}`,
    });
    return { 
      article: data.content, 
      eyecatch_url: data.eyecatch.url, 
      authors: data.author 
    };
  },
}
</script>

<style lang="scss" scoped>
  article {
    padding: 0 6%;
  }
</style>
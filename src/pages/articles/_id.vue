<template>
  <article>
    <LayoutsArticleHeader 
      :category="category" 
      :authors="authors" 
      :eyecatch_url="eyecatch_url" 
      :title="title" 
      :release="release"
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
      title: data.title,
      article: data.content, 
      eyecatch_url: data.eyecatch.url, 
      authors: data.author,
      category: data.category,
      release: new Date(data.createdAt)
    };
  },
}
</script>

<style lang="scss" scoped>
  article {
    padding: 0 6%;
  }
</style>
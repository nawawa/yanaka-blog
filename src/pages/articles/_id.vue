<template>
  <LayoutsArticlePageBody>

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

  </LayoutsArticlePageBody>
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
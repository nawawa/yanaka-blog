<template>
  <LayoutsArticleBody>

    <LayoutsArticleHeader 
      :category="category" 
      :authors="authors" 
      :eyecatch_url="eyecatch_url" 
      :title="title" 
      :release="release" 
      :summary="summary"
    />
    <aside>
      <!-- TODO:シェアとか -->
    </aside>

    <LayoutsArticleContent :content="content" />

  </LayoutsArticleBody>
</template>

<script>
export default {
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: `blogs/${params.id}`,
    });
    return { 
      title: data.title,
      content: data.content, 
      eyecatch_url: data.eyecatch.url, 
      authors: data.author,
      category: data.category,
      release: new Date(data.createdAt),
      summary: data.summary
    };
  },
}
</script>
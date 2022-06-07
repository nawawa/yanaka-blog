<template>
  <article>
    <header>
      <img :src="eyecatch_url" alt="">
      <h1>{{ article.title }}</h1>
      <!-- TODO:著者名 -->
      <LayoutsArticlePage :authors="authors" />
    </header>
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
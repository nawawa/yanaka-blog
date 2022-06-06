<template>
  <article>
    <header>
      <img :src="article.eyecatch.url" alt="">
      <h1>{{ article.title }}</h1>
      <!-- TODO:著者名 -->
    </header>
    <div v-html='article.content'></div>
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
    return { article: data };
  },
}
</script>
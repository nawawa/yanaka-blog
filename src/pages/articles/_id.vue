<template>
  <article>
    <img :src="article.eyecatch.url" alt="">
    <h1>{{ article.title }}</h1>
    <div v-html='article.content'></div>
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
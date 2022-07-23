<template>
  <PagesArticles 
    :articles="articles"
  />
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
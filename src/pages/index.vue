<template>
  <PagesTop :articles="articles" />
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

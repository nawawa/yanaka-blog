<template>
  <button @click="show">記事</button>
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
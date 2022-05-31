<template>
  <div>
    <v-col :cols="xs" v-for="article in articles" :key="article.id">
      <NuxtLink :to="`/articles/${article.id}`">
        <p>{{ article.title }}</p>
      </NuxtLink>
    </v-col>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: `blogs`,
    });
    return { articles: data.contents };
  },
  computed: {
    xs() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return (breakpoint === `xs`) ? 12: 6;
    }
  }
}
</script>
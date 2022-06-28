<template>
  <UIResponsive>

    <h1>新着記事一覧</h1>

    <v-row>
      <v-col :cols="xs" v-for="article in articles" :key="article.id">
        <NuxtLink :to="`/articles/${article.id}`">
          <v-card tile elevation="0" max-width="374" class="my-2">
            <v-img
              :src="article.eyecatch.url" alt=""
            ></v-img>
            <p>{{ article.category.name }}</p>
            <v-card-title>{{ article.title }}</v-card-title>
            <UIArticlePageAuthorList v-for="author in article.author" :key="author.index">
              <UIArticlePageAuthor :author="author" />
            </UIArticlePageAuthorList>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>

  </UIResponsive>
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
      return (breakpoint === `xs`) ? 12: 3;
    }
  }
}
</script>
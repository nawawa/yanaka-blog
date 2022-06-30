<template>
  <UIResponsive class="px-4">

    <h1>新着記事一覧</h1>

    <v-row>
      <v-col :cols="xs" v-for="article in articles" :key="article.id">
        <NuxtLink :to="`/articles/${article.id}`">
          <v-card tile elevation="0" class="my-2">
            <v-img
              :src="article.eyecatch.url" alt=""
            ></v-img>
            <div class="pa-1">
              <p class="ma-0 text-caption">
                {{ article.category.name }}
              </p>
              <v-card-title 
                :class="`pa-1  ${ text }`" 
              >
                <strong>
                  {{ article.title }}
                </strong>
              </v-card-title>
              <UIArticlePageAuthorList 
                v-for="author in article.author" 
                :key="author.index" 
                class="mb-0 mt-2"
              >
                <UIArticlePageAuthor 
                  :icon_size="14" 
                  :font_size="10"
                  :author="author" 
                />
              </UIArticlePageAuthorList>
            </div>
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
      return (breakpoint === `xs`) ? 
        12: 
        (breakpoint === `sm`) ?
          6:
          4;
    },
    text() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return (breakpoint === `xs`) ? 'text-subtitle-2': 'text-subtitle-1';
    }
  }
}
</script>
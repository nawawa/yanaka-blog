<template>
  <div>
    <h1>新着記事一覧</h1>
    <UIResponsive class="px-4">
      <v-row>
        <v-col 
          :cols="xs" 
          v-for="article in articles" :key="article.index"
        >
          <ObjectsArticleListPage :article="article" />
        </v-col>
      </v-row>
    </UIResponsive>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array
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
  }
}
</script>
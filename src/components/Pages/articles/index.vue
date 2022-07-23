<template>
  <div>
    <PartsHeading>
      新着記事一覧
    </PartsHeading>
    <ObjectsArticleTopPageCard  
      v-for="article in articles" :key="article.id"
      :article="article"
    />
    <v-pagination
      circle
      color="background"
      length="6"
    >
    </v-pagination>
  </div>
</template>

<script>
export default {
  computed: {
    articles() {
      return this.$store.state.articles.articles
    }
  }
}
</script>
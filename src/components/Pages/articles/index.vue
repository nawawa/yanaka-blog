<template>
  <div>
    <PartsHeading>
      新着記事一覧
    </PartsHeading>
    <ObjectsArticleTopPageCard  
      v-for="article in slicedArticles" :key="article.id"
      :article="article"
    />
    
    <v-pagination
      v-if="articleLength > pageButtonLength"
      circle
      :length="pageButtonLength"
      :total-visible="totalVisible"
      :value="thisPage"
    >
    </v-pagination>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array,
    pageButtonLength: {
      default: 6
    }
  },
  computed: {
    articleLength() {
      return this.articles.length
    },
    thisPage() {
      return Number(this.$route.query.page)
    },
    totalVisible() {
      return Math.ceil( (this.articleLength) / 6 )
    },
    slicedArticles() {
      const endIndex = (this.thisPage) * 6
      const startIndex = endIndex - 6

      return this.articles.slice(startIndex, endIndex)
    }
  }
}
</script>
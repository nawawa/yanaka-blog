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
      v-if="articleLength > pageArticleLength"
      circle
      :total-visible="pageButtonLength"
      :length="indexPageLength"
      :value="thisPage"
      @input="getPageNumber"
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
    },
    pageArticleLength: {
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
    indexPageLength() {
      return Math.ceil( (this.articleLength) / 6 )
    },
    slicedArticles() {
      const endIndex = (this.thisPage) * 6
      const startIndex = endIndex - 6

      return this.articles.slice(startIndex, endIndex)
    }
  },
  methods: {
    getPageNumber(clickedPageNumber) {
      this.$router.push(`/articles?page=${clickedPageNumber}`)
    }
  }
}
</script>
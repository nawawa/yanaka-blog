<template>
  <div>
    <PartsHeading>
      新着記事一覧
    </PartsHeading>
    <ObjectsArticleTopPageCard  
      v-for="article in articles" :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
export default {
  props: {
    articles: Array
  },
}
</script>
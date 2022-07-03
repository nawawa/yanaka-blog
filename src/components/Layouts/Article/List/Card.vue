<template>
  <UIArticleListContainer>
    <UIArticleListCard v-for="article in articles" :key="article.id">
      <UIArticleListCardEyecatch :articleId="article.id" :eyecatch="article.eyecatch" />
      <UIArticleListCardPadding>
        <UIArticleListCardInfo :category="article.category" :createdAt="new Date(article.createdAt)" />
        <UIArticleListCardTitle :articleId="article.id" :title="article.title" />
        <UIArticleListCardAuthorList :authors="article.author" />
      </UIArticleListCardPadding>
    </UIArticleListCard>
  </UIArticleListContainer>
</template>

<script>
export default {
  props: {
    articles: Array
  }
}
</script>
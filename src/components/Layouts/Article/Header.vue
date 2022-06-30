<template>
  <UIArticlePageHeader>
    <UIArticlePageEyeCatch :eyecatch_url="eyecatch_url" />

    <UIArticlePageHeaderText>
      <UIArticlePageInfo>
        <UIArticlePageCategory :category="category" />
        <UIArticlePageReleaseDate :release="release" />
      </UIArticlePageInfo>

      <UIArticlePageTitle :title="title" />

      <UIArticlePageSummary :summary="summary" />

      <UIArticlePageAuthorList v-for="author in authors" :key="author.index">
        <UIArticlePageAuthor :font_size="16" :icon_size="36" :author="author" />
      </UIArticlePageAuthorList>
    </UIArticlePageHeaderText>
  </UIArticlePageHeader>
</template>

<script>
export default {
  props: {
    category: Object,
    authors: Array,
    eyecatch_url: String,
    title: String,
    release: Date,
    summary: String
  }
}
</script>
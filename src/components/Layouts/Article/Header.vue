<template>
  <UIArticlePageHeader>
    <UIArticlePageEyeCatch :eyecatch_url="eyecatch_url" />
    <UIArticlePageCategory :category="category" />
    <UIArticlePageReleaseDate :release="release" />
    <UIArticlePageTitle :title="title" />
    <UIArticlePageAuthorList v-for="author in authors" :key="author.index">
      <UIArticlePageAuthor :author="author" />
    </UIArticlePageAuthorList>
  </UIArticlePageHeader>
</template>

<script>
export default {
  props: {
    category: Object,
    authors: Array,
    eyecatch_url: String,
    title: String,
    release: Date
  }
}
</script>
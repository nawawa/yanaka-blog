<template>
  <UIArticlePageHeader>
    <UIArticlePageEyeCatch :eyecatch_url="eyecatch_url" />
    <UIArticlePageTitle :title="title" />
    <UIArticlePageAuthorList>
      <div v-for="author in authors" :key="author.index">
        <UIArticlePageAuthor :author="author" />
      </div>
    </UIArticlePageAuthorList>
  </UIArticlePageHeader>
</template>

<script>
export default {
  props: {
    authors: Array,
    eyecatch_url: String,
    title: String
  }
}
</script>
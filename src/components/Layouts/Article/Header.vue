<template>
  <UIArticlePageHeader>
    <UIArticlePageEyeCatch :eyecatch_url="eyecatch_url" />

    <UIArticlePageHeaderText>
      <UIArticleInfo>
        <UIArticleCategory :font_size="(infoFontSize) ? 12: 16" :category="category" />
        <UIArticleReleaseDate :font_size="(infoFontSize) ? 12: 16" :release="release" />
      </UIArticleInfo>

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
  },
  computed: {
    infoFontSize() {
      return (this.$vuetify.breakpoint.name === 'xs');
    }
  }
}
</script>
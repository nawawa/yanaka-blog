<template>
  <UIArticlePageAuthorList>
    <div v-for="author in authors" :key="author.index">
      <UIArticlePageAuthor :author="author" />
    </div>
  </UIArticlePageAuthorList>
</template>

<script>
export default {
  props: {
    authors: Array
  }
}
</script>
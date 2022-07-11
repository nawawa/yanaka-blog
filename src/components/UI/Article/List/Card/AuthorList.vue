<template>
  <div>
    <UIArticlePageAuthorList 
      v-for="author in authors" 
      :key="author.index" 
      class="mb-4 mt-2"
    >
      <UIArticlePageAuthor 
        :icon_size="14" 
        :font_size="10"
        :author="author" 
      />
    </UIArticlePageAuthorList>
  </div>
</template>

<script>
export default {
  props: {
    authors: Array
  }
}
</script>
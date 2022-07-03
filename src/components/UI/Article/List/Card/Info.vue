<template>
  <UIArticleInfo>
    <UIArticleCategory class="py-0" :font_size="10" :category="category" />
    <UIArticleReleaseDate class="py-0" :font_size="10" :release="createdAt" />
  </UIArticleInfo>
</template>

<script>
export default {
  props: {
    category: Object,
    createdAt: Date
  }
}
</script>
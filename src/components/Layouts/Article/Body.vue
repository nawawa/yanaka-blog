<template>
  <UIArticlePageBody>
    <slot />
  </UIArticlePageBody>
</template>

<script>
export default {
  props: {
    content: String
  }
}
</script>

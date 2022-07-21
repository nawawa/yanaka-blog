<template>
  <PartsNuxtLinkText :to="`/articles/${articleId}`">
    <slot />
  </PartsNuxtLinkText>
</template>

<script>
export default {
  props: {
    articleId: String
  }
}
</script>
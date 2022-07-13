<template>
  <PartsNuxtLinkText :to="`/articles/${articleId}`" />
</template>

<script>
export default {
  props: {
    articleId: String
  }
}
</script>
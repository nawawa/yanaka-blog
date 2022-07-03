<template>
  <NuxtLink  :to="`/articles/${articleId}`">
    <v-img
      :src="eyecatch.url" alt=""
    ></v-img>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    eyecatch: Object,
    articleId: String
  }
}
</script>
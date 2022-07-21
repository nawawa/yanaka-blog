<template>
  <PartsHasPaddingContainerDiv>
    <PartsHeading>
      新着記事
    </PartsHeading>

      <ObjectsArticleTopPageCard  
        v-for="article in articles" :key="article.id"
        :article="article"
      />

    <PartsHeading>
      <PartsNuxtLinkText :to="`/articles`">
        ぜんぶ読む
      </PartsNuxtLinkText>
    </PartsHeading>
  </PartsHasPaddingContainerDiv>
</template>

<script>
export default {
  props: {
    articles: Array,
  }
}
</script>
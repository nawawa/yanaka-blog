<template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <v-card 
        max-width="780"
        tile 
        flat 
        color="background" 
        class="pa-2 mx-auto my-6"
      >
        <v-row>
          <v-col cols="6">
            <UIArticleListCardEyecatch :eyecatch="article.eyecatch" :articleId="article.id" />
          </v-col>
          <v-col cols="6">
            <UIStyledNuxtLink 
              :link="`/articles/${article.id}`"
            >
              <h4>{{ article.title }}</h4>
            </UIStyledNuxtLink>
            <UIArticleListCardInfo 
              :category="article.category" 
              :createdAt="new Date(article.createdAt)"
            />
            <UIArticleListCardAuthorList :authors="article.author" />
            <UIArticleListCardContent :content="article.content" :articleId="article.id" />
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array,
  }
}
</script>
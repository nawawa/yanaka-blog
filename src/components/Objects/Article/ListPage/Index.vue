<template>
  <v-card tile elevation="0" class="my-2">
    
    <ObjectsArticleListPagePartsEyecatch 
      :articleId="article.id"
      :eyecatch="article.eyecatch"
    />

    <div class="pa-1">

      <v-row class="mt-1 mb-1">
        <v-col 
          cols="6" 
          class="py-0"
        >
          <ObjectsArticleListPagePartsCategory>
            <Pelement :font_size="10">
              {{ article.category.name }}
            </Pelement>
          </ObjectsArticleListPagePartsCategory>
        </v-col>
        <v-col 
          cols="6" 
          class="py-0"
        >
          <div id="released_at">
            <Pelement :font_size="10">
              {{ release }}
            </Pelement>
          </div>
        </v-col>
      </v-row>

      <PartsNuxtLinkText :to="`/articles/${article.id}`">
        <v-card-title
          :class="`py-1 px-0  ${ text }`"
        >
          <strong>
            {{ article.title }}
          </strong>
        </v-card-title>
      </PartsNuxtLinkText>

      <PartsUL class="mb-4 mt-2">
        <PartsLI 
          v-for="author in article.author" :key="author.index"
        >
          <ObjectsArticleListPagePartsAuthorIcon 
            :src="author.icon.url" alt=""
          />
          <ObjectsArticleListPagePartsAuthorName>
            {{ author.name }}
          </ObjectsArticleListPagePartsAuthorName>
        </PartsLI>
      </PartsUL>

    </div>

  </v-card>
</template>

<script>
export default {
  props: {
    article: {
      id: String,
      eyecatch: Object,
      title: String,
      category: {
        name: String,
      },
      author: Array,
      content: String,
      createdAt: String
    }
  },
  computed: {
    release() {
      const releasedDate = new Date(this.article.createdAt);
      return releasedDate.getFullYear() + `年`
         + (releasedDate.getMonth()+1) + `月` 
         + releasedDate.getDate() + `日`
    },
    text() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return (breakpoint === `xs`) ? 'text-subtitle-2': 'text-subtitle-1';
    }
  },
}
</script>

<style lang="scss" scoped>

  // 投稿日のCSS
  p {
    text-align: right
  }
  #released_at {
    width: auto;
    height: auto;
    padding: 6px;
  }


</style>
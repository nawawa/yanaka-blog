<template>
  <UIStyledNuxtLink :link="`/articles/${articleId}`">
    <v-card-title
      :class="`py-1 px-0  ${ text }`"
    >
      <strong>
        {{ title }}
      </strong>
    </v-card-title>
  </UIStyledNuxtLink>
</template>

<script>
export default {
  props: {
    title: String,
    articleId: String
  },
  computed: {
    text() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return (breakpoint === `xs`) ? 'text-subtitle-2': 'text-subtitle-1';
    }
  }
}
</script>
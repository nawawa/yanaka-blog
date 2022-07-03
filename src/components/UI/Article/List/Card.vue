<template>
  <v-col :cols="xs">
    <v-card tile elevation="0" class="my-2">
      <slot />
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    articles: Array
  },
  computed: {
    xs() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return (breakpoint === `xs`) ? 
        12: 
        (breakpoint === `sm`) ?
          6:
          4;
    },
  }
}
</script>
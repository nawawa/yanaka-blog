<template>
  <v-responsive
    :width="width"
    class="mx-auto"
  >
    <slot />
  </v-responsive>
</template>

<script>
export default {
  computed: {
    width() {
      return (this.$vuetify.breakpoint.name === `xs`) ? "94%": "1064px";
    },
  }
}
</script>
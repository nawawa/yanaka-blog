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
      return (this.$vuetify.breakpoint.name === `xs`) ? "90%": "60%";
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
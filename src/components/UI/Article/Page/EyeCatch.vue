<template>
  <v-responsive
    :width="width"
    class="mx-auto"
  >
    <img 
      :src="eyecatch_url" alt="" 
    >
  </v-responsive>
</template>

<script>
export default {
  props: {
    eyecatch_url: String,
  },
  computed: {
    width() {
      return (this.$vuetify.breakpoint.name === `xs`) ? "100%": "60%";
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
  }
</style>
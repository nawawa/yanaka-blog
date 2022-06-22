<template>
  <div>
    <v-responsive
      :width="width"
      class="mx-auto"
    >
      <img 
        :src="eyecatch_url" alt="" 
      >
    </v-responsive>
  </div>
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

  div {
    width: 100%;
    height: auto;
    line-height: 0%;
    background-image: url("~@/assets/images/japanese_paper.jpeg");
    background-color:rgba(230, 230, 230, 0.8);
    background-blend-mode:lighten;
  }
</style>
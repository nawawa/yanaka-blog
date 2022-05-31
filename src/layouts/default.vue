<template>
  <v-app :style="{background: $vuetify.theme.themes[mode].background}">
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
    }
  },
  computed: {
    mode() {
      return (this.$vuetify.theme.dark === true) ? "dark": "light";
    }
  },
}
</script>

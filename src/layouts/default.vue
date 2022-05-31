<template>
  <v-app :style="{background: $vuetify.theme.themes[mode].background}">
    <LayoutsNavigationDrawer :mode="mode" v-model="drawer" />
    <LayoutsAppBar :mode="mode" @toggleDrawer="toggleDrawer" />
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
  methods: {
    toggleDrawer(event) {
      return this.drawer = !this.drawer;
    }
  }
}
</script>

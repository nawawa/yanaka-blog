<template>
  <v-app :style="{background: $vuetify.theme.themes['light'].background}">
    <LayoutsNavigationDrawer v-model="drawer" />
    <LayoutsAppBar @toggleDrawer="toggleDrawer" />
    <v-main>
      <Nuxt />
    </v-main>
    <LayoutsFooter />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
    }
  },
  methods: {
    toggleDrawer(event) {
      return this.drawer = !this.drawer;
    }
  }
}
</script>

<template>
  <v-app :style="{background: $vuetify.theme.themes['light'].background}">
    <LayoutsNavigationDrawer v-model="drawer" />
    <LayoutsAppBar @toggleDrawer="toggleDrawer">
      <UIAppBarLogo />
      <v-spacer />
      <UIAppBarTextMenu :text="`カテゴリ`" :link="`/about`" />
      <v-spacer />
      <UIAppBarTextMenu :text="`カテゴリ`" :link="`/about`" />
      <v-spacer />
      <UIAppBarTextMenu :text="`カテゴリ`" :link="`/about`" />
      <v-spacer />
      <UIAppBarTextMenu :text="`ヤナケンについて`" :link="`/about`" />
      <v-spacer />
      <UIAppBarTextMenu :text="`ライター`" :link="`/writers`" />
      <v-spacer />
      <UIAppBarMenuBtn @toggleDrawer="$emit('toggleDrawer')" />
    </LayoutsAppBar>
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

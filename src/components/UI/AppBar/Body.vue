<template>
  <v-app-bar
    :style="{background: $vuetify.theme.themes['light'].background}" 
    :clipped-left="clipped"
    fixed 
    flat 
    hide-on-scroll 
    app
  >
    <slot />
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
    }
  },
}
</script>
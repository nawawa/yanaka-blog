<template>
  <v-app-bar
    :style="{background: $vuetify.theme.themes[mode].background}" 
    :clipped-left="clipped"
    fixed 
    flat 
    app
  >
    <slot />
  </v-app-bar>
</template>

<script>
export default {
  props: {
    mode: String
  },
  data() {
    return {
      clipped: false,
    }
  },
}
</script>
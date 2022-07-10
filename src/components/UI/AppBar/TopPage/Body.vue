<template>
  <v-app-bar
    color="background"
    absolute 
    flat 
    hide-on-scroll 
    app 
    extended
    extension-height="394px"
    :src="require('@/assets/images/test_top_backgroundimage.jpeg')"
  >
    <slot />
  </v-app-bar>
</template>

<script>
export default {
}
</script>
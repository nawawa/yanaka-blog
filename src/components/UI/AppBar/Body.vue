<template>
  <v-app-bar
    color="background"
    absolute 
    flat 
    hide-on-scroll 
    app 
    :extended="isTopPage"
    extension-height="394px"
    :src="(isTopPage) ? getImgPath(): undefined"
  >
    <slot />
  </v-app-bar>
</template>

<script>
export default {
  props: {
    isTopPage: Boolean
  },
  data() {
    return {
      clipped: false,
    }
  },
  methods: {
    getImgPath() {
      return require('@/assets/images/test_top_backgroundimage.jpeg');
    }
  }
}
</script>
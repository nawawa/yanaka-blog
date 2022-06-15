<template>
  <img :src="eyecatch_url" alt="">
</template>

<script>
export default {
  props: {
    eyecatch_url: String,
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
  }
</style>
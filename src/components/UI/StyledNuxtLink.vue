<template>
  <NuxtLink :to="link">
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    link: String
  }
}
</script>

<style lang="scss" scoped>
  a {
    color: black;
  }
</style>
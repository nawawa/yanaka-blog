<template>
  <NuxtLink :to="link">
    <span>{{ text }}</span>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    text: String,
    link: String
  }
}
</script>

<style lang="scss" scoped>
  span {
    color: black;
    margin-top: 6px;
  }
</style>
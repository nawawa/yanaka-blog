<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 35px;
  }
</style>
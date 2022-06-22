<template>
  <Pelement>
    {{ summary }}
  </Pelement>
</template>

<script>
export default {
  props: {
    summary: String
  }
}
</script>

<style lang="scss" scoped>
  p {
    margin: 1em 0 2em;
  }
</style>
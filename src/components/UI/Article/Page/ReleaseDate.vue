<template>
  <v-col cols="6">
    <p>
      {{ release.getFullYear() }} 年
      {{ release.getMonth() + 1}} 月
      {{ release.getDate() }} 日
    </p>
  </v-col>
</template>

<script>
export default {
  props: {
    release: Date
  }
}
</script>

<style lang="scss" scoped>
  p {
    text-align: right
  }
</style>
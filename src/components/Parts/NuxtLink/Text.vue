<template>
  <NuxtLink v-bind="$attrs">
    <slot />
  </NuxtLink>
</template>

<style lang="scss" scoped>
  a {
    color: black !important;
  }
</style>
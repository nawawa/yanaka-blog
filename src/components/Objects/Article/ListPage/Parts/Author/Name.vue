<template>
  <p :style="`font-size: ${10}px;`">
    <slot />
  </p>
</template>

<style lang="scss" scoped>
  p {
    margin: 0 !important;
  }
</style>
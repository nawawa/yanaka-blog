<template>
  <img 
    v-bind="$attrs"
    class="mr-2"
    :style="`width:${14}px; height:${14}px;`"
  >
</template>

<style lang="scss" scoped>
  img {
    border-radius: 50%;
  }
</style>
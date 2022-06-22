<template>
  <p :style="`font-size:` + ((this.$vuetify.breakpoint.name === `xs`) ? '14': '16') + `px;`">
    <slot />
  </p>
</template>

<script>
export default {
}
</script>
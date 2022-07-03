<template>
  <p class="ma-0" :style="`font-size:` + font_size + `px;`">
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    font_size: Number
  }
}
</script>
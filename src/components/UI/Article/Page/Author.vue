<template>
  <li>
    <img 
      :src="author.icon.url" alt=""
      class="mr-2"
      :style="`width:${icon_size}px; height:${icon_size}px;`"
    >
    <p :style="`font-size: ${font_size}px;`">{{ author.name }}</p>
  </li>
</template>

<script>
export default {
  props: {
    author: Object,
    icon_size: Number,
    font_size: Number
  },
}
</script>

<style lang="scss" scoped>
  li {
    display: flex;
    align-items: center;
    p {
      margin: 0 !important; // カードの方では12px
    }
  }
  img {
    border-radius: 50%;
  }
</style>
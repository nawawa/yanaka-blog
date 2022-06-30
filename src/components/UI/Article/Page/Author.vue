<template>
  <li>
    <img :src="author.icon.url" alt="">
    <p>{{ author.name }}</p>
  </li>
</template>

<script>
export default {
  props: {
    author: Object
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
    width: 36px; // カードの方では12にしたい
    height: 36px; // カードの方では12にしたい
    margin-right: 10px;
  }
</style>
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
      margin: 0 !important;
    }
  }
  img {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    margin-right: 10px;
  }
</style>
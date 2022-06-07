<template>
  <li>
    <p>{{ author.name }}</p>
  </li>
</template>

<script>
export default {
  props: {
    author: Object
  }
}
</script>
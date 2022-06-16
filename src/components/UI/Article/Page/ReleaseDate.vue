<template>
  <p>
    {{ release.getFullYear() }} 年
    {{ release.getMonth() + 1}} 月
    {{ release.getDate() }} 日
  </p>
</template>

<script>
export default {
  props: {
    release: Date
  }
}
</script>
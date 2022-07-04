<template>
  <Pelement :font_size="font_size">
    {{ release.getFullYear() }} 年
    {{ release.getMonth() + 1}} 月
    {{ release.getDate() }} 日
  </Pelement>
</template>

<script>
export default {
  props: {
    release: Date,
    font_size: Number
  }
}
</script>
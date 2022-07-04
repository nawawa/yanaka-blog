<template>
  <v-col 
    cols="6" 
  >
    <div id="released_at">
      <Pelement :font_size="font_size">
        {{ release.getFullYear() }} 年
        {{ release.getMonth() + 1}} 月
        {{ release.getDate() }} 日
      </Pelement>
    </div>
  </v-col>
</template>

<script>
export default {
  props: {
    release: Date,
    font_size: Number,
  }
}
</script>

<style lang="scss" scoped>
  p {
    text-align: right
  }
  #released_at {
    width: auto;
    height: auto;
    padding: 6px;
  }
</style>
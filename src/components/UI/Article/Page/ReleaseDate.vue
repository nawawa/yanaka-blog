<template>
  <v-col 
    cols="6" 
  >
    <div id="released_at">
      <Pelement class="ma-0">
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
    release: Date
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
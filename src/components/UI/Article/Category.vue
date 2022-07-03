<template>
  <v-col 
    cols="6" 
  >
    <button>
      <Pelement :font_size="font_size">
        {{ category.name }}
      </Pelement>
    </button>
  </v-col>
</template>

<script>
export default {
  props: {
    category: Object,
    font_size: Number
  }
}
</script>

<style lang="scss" scoped>
  button {
    width: auto;
    height: auto;
    padding: 6px;
    background: grey;
  }
</style>
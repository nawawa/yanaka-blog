<template>
  <v-col 
    cols="6" 
  >
    <button>
      <Pelement class="ma-0">
        {{ category.name }}
      </Pelement>
    </button>
  </v-col>
</template>

<script>
export default {
  props: {
    category: Object
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
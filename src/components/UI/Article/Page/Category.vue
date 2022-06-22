<template>
  <v-col cols="6">
    <Pelement>
      {{ category.name }}
    </Pelement>
  </v-col>
</template>

<script>
export default {
  props: {
    category: Object
  }
}
</script>
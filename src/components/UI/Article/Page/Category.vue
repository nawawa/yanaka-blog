<template>
  <v-col cols="6">
    <p>{{ category.name }}</p>
  </v-col>
</template>

<script>
export default {
  props: {
    category: Object
  }
}
</script>
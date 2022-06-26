<template>
  <H1 v-bind="attribute">
    {{ title }}
  </H1>
</template>

<script>
export default {
  props: {
    title: String
  },
  computed: {
    attribute() {
      return (this.$vuetify.breakpoint.name === `xs`) ?
        { class: `text-h5`}:
        { style: `font-size: 30px` }
    }
  }
}
</script>
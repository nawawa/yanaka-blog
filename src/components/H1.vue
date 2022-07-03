<template>
  <h1 v-bind="$attrs" class="mb-2">
    <strong>
      <slot />
    </strong>
  </h1>
</template>

<script>
export default {
}
</script>
<template>
  <div>
    <UIAppBarTopPageBody 
      v-if="isTopPage" 
      @toggleDrawer="$emit('toggleDrawer')" 
    >
      <slot />
    </UIAppBarTopPageBody>
    <UIAppBarBody
      v-else
      @toggleDrawer="$emit('toggleDrawer')" 
    >
      <slot />
    </UIAppBarBody>
  </div>
</template>

<script>
export default {
  computed: {
    isTopPage() {
      return (this.$route.path === '/');
    }
  }
}
</script>
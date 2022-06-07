<template>
  <UIAppBarBody @toggleDrawer="$emit('toggleDrawer')">
    <UIAppBarLogo />
    <v-spacer />
    <div></div>
    <v-spacer />
    <UIAppBarMenuBtn @toggleDrawer="$emit('toggleDrawer')" />
  </UIAppBarBody>
</template>

<script>
export default {
}
</script>
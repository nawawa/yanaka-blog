<template>
  <UIAppBarBody
    @toggleDrawer="$emit('toggleDrawer')" 
    :isTopPage="getNowPage()"
  >
    <UIAppBarLogo />
     <v-spacer />
    <UIAppBarTextMenu :text="`カテゴリ`" :link="`/about`" />
     <v-spacer />
    <UIAppBarTextMenu :text="`カテゴリ`" :link="`/about`" />
     <v-spacer />
    <UIAppBarTextMenu :text="`カテゴリ`" :link="`/about`" />
    <v-spacer />
    <UIAppBarTextMenu :text="`ヤナケンについて`" :link="`/about`" />
    <v-spacer />
    <UIAppBarTextMenu :text="`ライター`" :link="`/writers`" />
    <v-spacer />
    <UIAppBarMenuBtn @toggleDrawer="$emit('toggleDrawer')" />
  </UIAppBarBody>
</template>

<script>
export default {
  methods: {
    getNowPage() {
      return (this.$route.path === '/');
    }
  }
}
</script>
<template>
  <v-footer 
    id="footer" 
    height="64" 
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
  </v-footer>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  #footer {
    padding: 0 100px;
  }
</style>